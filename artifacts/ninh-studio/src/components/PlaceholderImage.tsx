import Image from "next/image";

import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  objectPosition?: string;
};

export function PlaceholderImage({
  src,
  alt,
  className,
  fill,
  priority,
  sizes,
  width,
  height,
  objectPosition,
}: PlaceholderImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(className)}
      style={objectPosition ? { objectPosition } : undefined}
      fill={fill}
      priority={priority}
      sizes={sizes}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      unoptimized
    />
  );
}
