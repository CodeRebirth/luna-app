"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "./css/swipers.css";
import { Parallax, Navigation, Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import TestimonyCard from "./testimonyCard";
import TestimonyVideo from "./videoCard";

const maxWidthForNavigation = 768;

const testimonies = [
  {
    name: "Lisa Joy",
    designation: "Film Maker",
    profilePhoto: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).jpg",
    textDescription: "Lorem ipsum dolor sit amet, consectetur.",
    videoUrl: "https://www.youtube.com/watch?v=8LSt8_11wbQ?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg",
    rating: 5,
  },
  {
    name: "Ramona Heather",
    designation: "Film Maker",
    profilePhoto: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    textDescription: "Lorem ipsum dolor sit amet, consectetur.",
    videoUrl: "https://www.youtube.com/watch?v=8LSt8_11wbQ?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg",
    rating: 5,
  },
  {
    name: "James woz",
    designation: "Artist",
    profilePhoto: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    textDescription: "Lorem ipsum dolor sit amet, consectetur.",
    videoUrl: "https://www.youtube.com/watch?v=8LSt8_11wbQ?autoplay=1&rel=0",
    thumbnail: "https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg",
    rating: 5,
  },
];


export type Testimony = {
  _id: string
  name: string;
  profilePhoto: string;
  textDescription: string;
  videoUrl: string;
  rating: number;
  thumbnail: string;
  designation: string
}

interface TestimonyProp {
  testimonyData: Testimony[];
}

const Testimony: React.FC<TestimonyProp> = ({ testimonyData }) => {
  const [navigation, setNavigation] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    setNavigation(window.innerWidth > maxWidthForNavigation);
  }, []);

  if (testimonyData == null || testimonyData.length == 0) {
    return null;
  }

  return (
    <>
      <div className="w-full h-auto mx-auto md:p-14 bg-slate-100">
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-12">
            <h1 className="text-xl md:text-3xl tracking-[.25em] text-center font-bold">TESTIMONIES</h1>
            <p className="text-lg md:text-4lg mt-2 md:mt-5 tracking-[.5em] text-center">What Our Clients Say?</p>
          </div>
        </div>
        {/*
          <div className="grid grid-cols-12 md:gap-2">
           <div className="hidden col-span-12 md:col-span-1 mt-2 md:mt-5 md:flex justify-center items-center">
            <div className="flex flex-col space-y-1 md:ml-14 md:p-5 text-center text-2xl font-bold bg-black text-white">
              <span>T</span>
              <span>E</span>
              <span>S</span>
              <span>T</span>
              <span>I</span>
              <span>M</span>
              <span>O</span>
              <span>N</span>
              <span>I</span>
              <span>E</span>
              <span>S</span>
            </div>
          </div> 
          </div>
          */}
        <div className="col-span-12 md:col-span-12 p-0 md:p-4">
          <div className="h-auto pb-10 md:pb-0">
            <Swiper
              initialSlide={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 20000,
                disableOnInteraction: false,
              }}
              loop={false}
              // navigation={navigation}
              parallax={true}
              rewind={true}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: false,
              }}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {testimonyData.map((testimony, index) => (
                <SwiperSlide key={index} onClick={() => swiperRef.current && swiperRef.current.slideTo(index)}>
                  <div className="w-full mx-auto">
                    <div className="grid grid-cols-12">
                      <div className="col-span-12 md:col-span-3 pl-0 md:pl-4 flex flex-col md:flex-none items-center md:items-start justify-center">
                        <TestimonyCard testimonyTextAndProfile={testimony} />
                      </div>
                      <div className="col-span-12 md:col-span-8 pl-2 md:p-10 mt-0 md:-mt-10 ml-0 md:ml-10">
                        <TestimonyVideo testimonyDataVideoAndThumbNail={testimony} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimony;
