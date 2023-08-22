import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audiophille",
  description: "Best Audio Gadgets Store",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
