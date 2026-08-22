import type { ReactNode } from "react";
import { FloatingBookNow } from "@/components/sections/FloatingBookNow";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <FloatingBookNow />
      <div className="min-h-screen bg-background text-foreground font-sans">{children}</div>
      <Footer />
    </>
  );
}
