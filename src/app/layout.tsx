import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClickSparkWrapper from "@/components/ClickSparkWrapper";
import Providers from "@/components/Providers";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WHP — We Have a Plan",
  description:
    "Agência de design e tecnologia. Identidade visual, websites, SEO e social media para marcas que querem se destacar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={urbanist.variable}>
      <body className="antialiased">
        <Providers>
          <ClickSparkWrapper>
            {children}
          </ClickSparkWrapper>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
