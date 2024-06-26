import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NextButton, PrevButton } from "../ui/EmblaCarousel/EmblaCarouselArrowButtons";
import OfferCard from "./offerCard";

type services = {
  _id: string;
  title: string;
  offerDetails: string;
  thumbnail: string;
  price: number;
  serviceCapacity: number;
};

type PropType = {
  slides: services[];
  options: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className={`embla__container mr-0 ${slides.length < 4 ? 'md:mr-[-50px]' : 'mr-0'}`}>
            {slides.map((service) => (
              <div className="embla__slide" key={service._id}>
                <OfferCard service={service} />
              </div>
            ))}
          </div>
        </div>
        <div className={`hidden md:${slides.length > 5 ? 'block' : 'hidden'}`}>
          <PrevButton className="hidden embla__button prevButton" onClick={scrollPrev} />
          <NextButton className="hidden embla__button nextButton" onClick={scrollNext} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
