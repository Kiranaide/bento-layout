import Image from "next/image";

export default function CardBento({ icon, image, textIcon }) {
  return (
    <div className="relative rounded-md h-full">
      <aside className="absolute z-10 flex gap-2 rounded-full text-primary bg-[#97E7E1] px-4 py-2 top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-5 lg:left-5 scale-90 sm:scale-95 md:scale-100">
        <Image
          src={icon}
          alt={`${icon} icon`}
          width={16}
          height={16}
        />
        <span className="font-semibold text-base">{textIcon}</span>
      </aside>
      <div className="h-full relative">
        <Image
          src={image}
          alt="Bento"
          fill={true}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
}
