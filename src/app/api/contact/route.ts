import { headers } from "next/headers";

const MAX_REQUESTS_PER_IP = 5;
const TIME_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const requestTracker = new Map<string, { count: number; resetTime: number }>();

function cleanupOldEntries() {
  const now = Date.now();
  for (const [ip, data] of requestTracker.entries()) {
    if (now > data.resetTime) {
      requestTracker.delete(ip);
    }
  }
}

function checkRateLimit(ip: string): boolean {
  cleanupOldEntries();
  const now = Date.now();
  const tracker = requestTracker.get(ip);

  if (!tracker || now > tracker.resetTime) {
    requestTracker.set(ip, { count: 1, resetTime: now + TIME_WINDOW_MS });
    return true;
  }

  if (tracker.count >= MAX_REQUESTS_PER_IP) {
    return false;
  }

  tracker.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\+\-\(\)]+$/;
  return phoneRegex.test(phone);
}

export const POST = async (request: Request) => {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0] ||
      headersList.get("x-real-ip") ||
      "unknown";

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Too many requests. Please try again later.",
        }),
        { status: 429, headers: { "Content-Type": "application/json" } },
      );
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid request format" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate required fields
    const { firstname, lastname, email, phone, message } = body;

    if (!firstname || !lastname || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate at least one contact method
    if (!email && !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please provide at least one contact method",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate email format if provided
    if (email && !validateEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate phone format if provided
    if (phone && !validatePhone(phone)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid phone format" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      firstname: sanitizeInput(firstname),
      lastname: sanitizeInput(lastname),
      email: email ? sanitizeInput(email) : null,
      phone: phone ? sanitizeInput(phone) : null,
      message: sanitizeInput(message),
      submittedAt: new Date().toISOString(),
      ip,
    };

    // Log sanitized data (in production, send to email service or database)
    console.log("Contact form submission:", sanitizedData);

    // TODO: Integrate with email service (e.g., SendGrid, AWS SES, Resend)
    // TODO: Store in database for record keeping

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An error occurred. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
