import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
import Title from "../../Components/Title";
import project from "../../../project";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const swiperRefDesktop = useRef();
  const swiperRefMobile = useRef();
  console.log(project);
  return (
    <section id="portfolio" className="my-5">
      <Title>Portfolio</Title>
      <Segment />
      <Swiper
        id="swiper_desktop"
        onSwiper={(swiper) => (swiperRefDesktop.current = swiper)}
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
        {project.map((data, i) => (
          <SwiperSlide key={i} className="py-20">
            {({ isActive }) => (
              <Link to={`/project/${data.slug}`}>
                <div
                  style={{ backgroundImage: `url(${data.thumbnail})` }}
                  className={`bg-gray-300 w-full h-[20rem] rounded-3xl bg-cover ${
                    isActive ? "slide-active" : "slide-inactive"
                  }`}
                >
                  <div className="px-5 py-5 flex flex-col justify-end h-full w-full bg-gradient-to-t from-black rounded-3xl transition-opacity opacity-0 hover:opacity-100 cursor-pointer">
                    <h1 className="text-white  font-bold">{data.name}</h1>
                    <p className="text-white text-[0.6rem]">
                      {data.description}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        id="swiper_mobile"
        onSwiper={(swiper) => (swiperRefMobile.current = swiper)}
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
        {project.map((data, i) => (
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
      <section className="lg:flex hidden justify-center space-x-4 my-3">
        <button
          onClick={() => swiperRefDesktop.current.slidePrev()}
          className="bg-blue-theme p-2 rounded-full"
        >
          <ArrowLeft2 className="text-white" />
        </button>
        <button
          onClick={() => swiperRefDesktop.current.slideNext()}
          className="bg-blue-theme p-2 rounded-full"
        >
          <ArrowRight2 className="text-white" />
        </button>
      </section>
      <section className="flex lg:hidden justify-center space-x-4 my-3">
        <button
          onClick={() => swiperRefMobile.current.slidePrev()}
          className="bg-blue-theme p-2 rounded-full"
        >
          <ArrowLeft2 className="text-white" />
        </button>
        <button
          onClick={() => swiperRefMobile.current.slideNext()}
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
