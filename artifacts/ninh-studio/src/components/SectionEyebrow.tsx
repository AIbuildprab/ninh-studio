import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <span className={`brand-eyebrow mb-4 block ${className}`}>
      {children}
    </span>
  );
}
