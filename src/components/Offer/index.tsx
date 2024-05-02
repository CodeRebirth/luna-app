import React from "react";
import { CommonFetcher } from "@/lib/uiDataFetcher/commonFetcher";

import EmblaCarousel from "./cardSlider";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  loop: true,
  dragFree: true,
};

export default function Offer() {

  const { data, error } = CommonFetcher("/api/offers");

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data.offerData && data.offerData.length === 0) return null;

  return (
    <>
      <div className="w-screen bg-white">
        <div className="text-center pt-10">
          <h3 className="text-base md:text-4xl font-sans font-normal tracking-widest">NEW OFFER SERVICES</h3>
          <div className="border-t w-1/3 mx-auto border-gray-900 mt-4"></div>
        </div>
        <div className="w-full relative p-4 md:p-16">
          <EmblaCarousel slides={data.offerData} options={OPTIONS} />
        </div>
      </div>
    </>
  );
}
