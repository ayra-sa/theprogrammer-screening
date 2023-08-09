import clsx from "clsx";
import Image from "next/image";

type ImageProps = {
  variant?: "auto" | "full";
  src: string;
  alt: string;
};

const ImageItem = ({ variant = "full", src, alt }: ImageProps) => {
  const imageClass = clsx("h-auto", variant === "full" ? "w-full" : "w-auto");

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={imageClass}
    />
  );
};

export default ImageItem;
