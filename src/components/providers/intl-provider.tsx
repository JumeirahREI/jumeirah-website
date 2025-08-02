import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { PropsWithChildren } from "react";

type IntlProviderProps = PropsWithChildren & {
  locale: string;
};

export default async function IntlProvider({
  children,
  locale,
}: IntlProviderProps) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
