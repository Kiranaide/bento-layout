import ButtonBento from "@/components/button-bento";
import CardBento from "@/components/card-bento";
import Header from "@/components/header";
import HeroBento from "@/components/hero-bento";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 h-screen">
        <div className="h-2/3">
          <HeroBento />
        </div>
        <div className="flex-1 flex flex-row gap-4">
          <div className="flex-1">
            <CardBento />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="basis-4/5">
              <CardBento />
            </div>
            <div className="basis-1/5">
              <ButtonBento />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
