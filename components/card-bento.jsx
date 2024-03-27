import Image from "next/image";
import Star from "@/public/star.svg";
import Katsudon from "@/public/katsudon.jpg";

export default function CardBento() {
  return (
    <div className="relative rounded-md h-full">
      <aside className="absolute z-10 flex gap-2 rounded-full text-primary bg-[#97E7E1] px-4 py-2 top-5 left-5">
        <Image
          src={Star}
          alt="Star Icon"
          width={16}
          height={16}
        />
        <span className="font-semibold text-base">Top bento this week</span>
      </aside>
      <div className="h-full relative">
        <Image
          src={Katsudon}
          alt="Bento"
          fill={true}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
}
