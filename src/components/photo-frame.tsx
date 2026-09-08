import Image from "next/image";

type PhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  rounded?: boolean;
  sizes?: string;
};

export function PhotoFrame({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/3]",
  rounded = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: PhotoFrameProps) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden border border-maroon/15 ${rounded ? "rounded-md" : ""} ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
