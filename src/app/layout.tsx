import type { Metadata } from "next";
import { Playfair_Display, Lora, Noto_Serif_Tibetan } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_NAME } from "@/lib/nav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const notoTibetan = Noto_Serif_Tibetan({
  variable: "--font-tibetan",
  subsets: ["tibetan"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — A Non-Denominational Church & Retreat Center`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A growing non-denominational spiritual community dedicated to meditation, contemplative practice, compassionate service, and connection — working toward a permanent church and retreat center in the Adirondacks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${notoTibetan.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
