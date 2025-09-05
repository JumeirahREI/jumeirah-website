import { SVGProps } from "react";

const LayoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 54 54" // Added a viewBox for better scaling
    {...props}
  >
    <path
      stroke="currentColor" // Changed from #D9D9D9
      strokeWidth={3.5}
      d="M7.617 49.254c3.582 2.647 8.691 2.647 18.91 2.647 10.22 0 15.33 0 18.911-2.647a13.747 13.747 0 0 0 3.015-3.067c2.602-3.643 2.602-8.841 2.602-19.236 0-10.396 0-15.593-2.602-19.237a13.747 13.747 0 0 0-3.015-3.067C41.856 2 36.747 2 26.528 2 16.308 2 11.199 2 7.617 4.647a13.746 13.746 0 0 0-3.015 3.067C2 11.358 2 16.555 2 26.95c0 10.395 0 15.593 2.602 19.236a13.746 13.746 0 0 0 3.015 3.067Z"
    />
    <path
      stroke="currentColor" // Changed from #D9D9D9
      strokeLinecap="round"
      strokeWidth={4}
      d="m17 16 22.007.014M39.007 40.014v-24"
    />
    <circle cx={17} cy={32} r={2} fill="currentColor" />{" "}
    {/* Changed from #D9D9D9 */}
    <circle
      cx={24}
      cy={40}
      r={2}
      fill="currentColor"
      transform="rotate(90 24 40)"
    />{" "}
    {/* etc. */}
    <circle cx={17} cy={24} r={2} fill="currentColor" />
    <circle
      cx={31}
      cy={40}
      r={2}
      fill="currentColor"
      transform="rotate(90 31 40)"
    />
    <circle
      cx={17}
      cy={40}
      r={2}
      fill="currentColor"
      transform="rotate(90 17 40)"
    />
  </svg>
);
export default LayoutIcon;
