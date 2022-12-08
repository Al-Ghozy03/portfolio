import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "./Title";
import "swiper/css";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";

export default function Portfolio() {
  const swiperRef = useRef();
  const carousel = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-purple-500",
  ];
  return (
    <section id="portfolio" className="my-5">
      <Title>Portfolio</Title>
      <Segment />
      <Swiper
        id="swiper_desktop"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full lg:flex hidden"
        centeredSlides={true}
        loop
        // slidesPerView={1.5}
        spaceBetween={40}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.9,
            spaceBetween: 150,
          },
          1024: {
            slidesPerView: 1.9,
            spaceBetween: 150,
          },
        }}
      >
        {carousel.map((data, i) => (
          <SwiperSlide key={i} className="py-20">
            {({ isActive }) => (
              <div
                className={`bg-gray-300 w-full h-[20rem] rounded-3xl ${
                  isActive ? "slide-active" : "slide-inactive"
                }`}
              ></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        id="swiper_mobile"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full lg:hidden"
        centeredSlides={true}
        loop
        // slidesPerView={1.5}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.9,
            spaceBetween: 150,
          },
          1024: {
            slidesPerView: 1.9,
            spaceBetween: 150,
          },
        }}
      >
        {carousel.map((data, i) => (
          <SwiperSlide key={i} className="">
            {({ isActive }) => (
              <div
                className={`bg-gray-300 h-60 rounded-3xl ${
                  isActive ? "slide-active-mobile" : "slide-inactive"
                }`}
              ></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="flex justify-center space-x-4 my-3">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="bg-blue-theme p-2 rounded-full"
        >
          <ArrowLeft2 className="text-white" />
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="bg-blue-theme p-2 rounded-full"
        >
          <ArrowRight2 className="text-white" />
        </button>
      </section>
    </section>
  );
}

function Segment() {
  const [segment] = useState(["All", "Frontend", "Backend"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <article className="flex space-x-4 justify-center my-5">
      {segment.map((data, i) => (
        <button
          onClick={() => setCurrentIndex(i)}
          className={`${
            currentIndex === i
              ? "bg-blue-theme text-white font-medium"
              : "text-[#9A9A9A]"
          } px-5 py-1.5 rounded-full lg:text-base text-sm`}
          key={i}
        >
          {data}
        </button>
      ))}
    </article>
  );
}
