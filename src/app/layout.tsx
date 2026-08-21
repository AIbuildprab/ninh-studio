import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import { pageMetadata, siteOrigin } from "@/lib/seo";
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

const homeDescription =
  "Photography studio on Joyce Street in East Vancouver. Portraits, wedding photography, hair & makeup, and studio rental from $60/hr. Steps from Joyce-Collingwood SkyTrain.";

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  applicationName: site.name,
  authors: [{ name: site.owner, url: siteOrigin }],
  creator: site.name,
  publisher: site.name,
  category: "Photography studio",
  keywords: [
    "photography studio Vancouver",
    "portrait photography Vancouver",
    "wedding photography Vancouver",
    "hair and makeup Vancouver",
    "photo studio rental Vancouver",
    "Joyce-Collingwood photography",
    "East Vancouver photography studio",
  ],
  icons: { icon: "/icon.svg" },
  formatDetection: { telephone: true, email: true, address: true },
  ...pageMetadata({
    title: site.seo.title,
    description: homeDescription,
    path: "/",
  }),
  other: {
    "geo.region": "CA-BC",
    "geo.placename": "Vancouver",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
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
