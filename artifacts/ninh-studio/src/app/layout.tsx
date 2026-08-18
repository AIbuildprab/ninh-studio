import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Ninh Studio | Photography Studio in East Vancouver",
  description:
    "Photography studio on Joyce Street in East Vancouver. Portraits, wedding photography, hair & makeup, and studio rental from $60/hr. Steps from Joyce-Collingwood SkyTrain.",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Ninh Studio",
    description:
      "Photography studio on Joyce Street in East Vancouver. Portraits, weddings, hair & makeup, and studio rental.",
    type: "website",
    images: ["/images/Dolphin_Radar_20260818002150.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninh Studio",
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
