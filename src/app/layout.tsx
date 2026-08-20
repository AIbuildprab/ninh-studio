import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = localFont({
  src: [
    { path: "../fonts/dm-sans.woff2", weight: "100 900", style: "normal" },
    { path: "../fonts/dm-sans-italic.woff2", weight: "100 900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-dm-sans",
});

const cormorant = localFont({
  src: [
    {
      path: "../fonts/cormorant-garamond.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../fonts/cormorant-garamond-italic.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninhstudio.ca"),
  title: site.seo.title,
  description:
    "Photography studio on Joyce Street in East Vancouver. Portraits, wedding photography, hair & makeup, and studio rental from $60/hr. Steps from Joyce-Collingwood SkyTrain.",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: site.seo.title,
    description:
      "Photography studio on Joyce Street in East Vancouver. Portraits, weddings, hair & makeup, and studio rental.",
    type: "website",
    images: ["/images/Dolphin_Radar_20260818002150.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description:
      "Photography studio on Joyce Street in East Vancouver. Portraits, weddings, hair & makeup, and studio rental.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
