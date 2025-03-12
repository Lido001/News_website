import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import modi from "../assets/WSDS 2025 Masthead_new_0.png";
import breaking_news from "../assets/breaking_news.png";
import ai_news from "../assets/What-is-the-Impact-of-Artificial-Intelligence-on-Everyday-Life.jpg.webp";
import cricket from "../assets/Champions_Trophy_2025_Banner.jpg";
import stock from "../assets/stock3_0-sixteen_nine.webp";
import virus from "../assets/infec.jpg";
import clock from "../assets/icons8-clock.gif";

const slides = [
  {
    id: 1,
    title: "Breaking News: Global Summit 2025",
    description: "World leaders gather to discuss climate change solutions.",
    image: modi,
    logo: breaking_news,
  },
  {
    id: 2,
    title: "Tech Revolution: AI in Everyday Life",
    description: "How artificial intelligence is reshaping industries worldwide.",
    image: ai_news,
    logo: breaking_news,
  },
  {
    id: 3,
    title: "Sports Update: Championship Finals",
    description: "An intense battle for the title in the world of sports.",
    image: cricket,
    logo: breaking_news,
  },
  {
    id: 4,
    title: "Market Trends: Stocks Surge",
    description: "Stock markets experience a significant rise this week.",
    image: stock,
    logo: breaking_news,
  },
  {
    id: 5,
    title: "Health Alert: New Virus Discovered",
    description: "Health organizations are monitoring a newly discovered virus.",
    image: virus,
    logo: breaking_news,
  },
];

const Header: React.FC = () => {
  return (
    <div className="py-10 px-2">
        <div className="flex items-center justify-center gap-x-3 mb-10">
        <h1 className="text-4xl font-bold  text-center text-red-500 ">Latest News : 24/7</h1>
        <img src={clock} alt="" />
        </div>
        <Swiper 
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    //   navigation
      pagination={{ clickable: true }}
      className="w-full h-[500px] rounded-lg"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-fill "
          />
          <div className="absolute bottom-8 left-8 backdrop:filter backdrop-blur-md text-white p-4 rounded-lg w-3xl">
            <h2 className="text-4xl font-bold z-50">{slide.title}</h2>
            <p className="text-base mt-2">{slide.description}</p>
          </div>
          <img
            src={slide.logo}
            alt="News Logo"
            className="absolute -bottom-8 -right-4 w-xl h-sm object-fit"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Header;

