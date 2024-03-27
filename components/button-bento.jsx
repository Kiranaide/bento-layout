import Image from "next/image";
import ArrowRight from "@/public/arrow-right.svg";

export default function ButtonBento() {
  return (
    <button className="border p-4 flex justify-between gap-4 items-center rounded-md size-full">
      More Recipe
      <span className="hidden lg:block">
        <Image
          src={ArrowRight}
          alt="Arrow Right SVG"
          width={16}
          height={16}
        />
      </span>
    </button>
  );
}
