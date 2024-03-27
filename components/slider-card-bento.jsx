import Image from "next/image";
import Katsudon from "@/public/katsudon.jpg";
import ArrowRight from "@/public/arrow-right.svg";

export default function SliderCard() {
  return (
    <div className="bg-foreground rounded-md w-full h-full relative">
      <div className="size-full relative rounded-md bg-stone-900/80">
        <Image
          src={Katsudon}
          alt="Bento"
          fill={true}
          className="rounded-md object-cover opacity-80"
        />
      </div>
      <div className="absolute top-5 right-5 flex gap-4">
        <button className="p-4 bg-foreground rounded-full">
          <Image
            src={ArrowRight}
            alt="Arrow Right SVG"
            width={16}
            height={16}
            className="rotate-180"
          />
        </button>
        <button className="bg-background p-4 rounded-full">
          <Image
            src={ArrowRight}
            alt="Arrow Right SVG"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
