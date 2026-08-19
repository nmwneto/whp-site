import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClickSparkWrapper from "@/components/ClickSparkWrapper";
import Providers from "@/components/Providers";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_TITLE, OG_IMAGE } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const DEFAULT_DESCRIPTION =
  "Agência de marketing digital que une estratégia, design e tecnologia para fazer sua marca crescer: identidade visual, sites, SEO e social media.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "agência de marketing digital",
    "identidade visual",
    "branding",
    "web design",
    "desenvolvimento de sites",
    "SEO",
    "social media",
    "tráfego pago",
    "WHP",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "WHP — We Have a Plan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={urbanist.variable}>
      <body className="antialiased">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Providers>
          <ClickSparkWrapper>
            {children}
          </ClickSparkWrapper>
          <WhatsAppFloat />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
