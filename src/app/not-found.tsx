import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found | Ninh Studio",
  description: "That page does not exist. Return to Ninh Studio on Joyce Street.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-ink px-6">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo variant="light" size="lg" />
        </div>
        <p className="uppercase tracking-[0.36em] text-gold-muted text-[10px] mb-4">404</p>
        <h1 className="font-display font-medium text-4xl text-white mb-3">Page not found</h1>
        <p className="text-gold-muted/75 mb-8">
          That page doesn’t exist. Head back to the studio homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="lookbook-solid inline-flex items-center justify-center min-w-[160px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
          >
            Back to home
          </Link>
          <Link
            href={site.links.session}
            className="lookbook-ghost inline-flex items-center justify-center min-w-[160px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
          >
            Book a session
          </Link>
        </div>
      </div>
    </div>
  );
}
