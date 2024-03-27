import ButtonBento from "@/components/button-bento";
import CardBento from "@/components/card-bento";
import Header from "@/components/header";
import HeroBento from "@/components/hero-bento";
import SliderCard from "@/components/slider-card-bento";

import Star from "@/public/star.svg";
import Katsudon from "@/public/katsudon.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row gap-4 h-full lg:h-screen">
        <div className="flex flex-col gap-4 w-full lg:w-3/4 h-full">
          <div className="h-2/3">
            <HeroBento />
          </div>
          <div className="flex-1 flex flex-col lg:flex-row gap-4 h-full">
            <div className="flex-1">
              <CardBento
                icon={Star}
                textIcon={"Top bento this week"}
                image={Katsudon}
              />
            </div>
            <div className="flex-1 flex flex-row lg:flex-col gap-4">
              <div className="basis-4/5">
                <CardBento
                  icon={Star}
                  textIcon={"Try our new bento"}
                  image={Katsudon}
                />
              </div>
              <div className="basis-1/5">
                <ButtonBento />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex-1">
          <SliderCard />
        </div> */}
      </div>
    </>
  );
}
