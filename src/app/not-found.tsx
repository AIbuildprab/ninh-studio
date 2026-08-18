import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <Logo variant="dark" size="lg" />
        </div>
        <h1 className="font-display font-medium text-4xl text-foreground mb-3">Page not found</h1>
        <p className="text-secondary-foreground mb-8">
          That page doesn’t exist. Head back to the studio homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
