import React, { useState } from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="h-[90vh] w-screen relative">
      <div
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        className="w-[400vw] h-full flex transition-transform duration-1000"
      >
        <img
          className="w-screen h-full object-cover"
          src={data[0]}
          alt="ImageOne"
          loading="priority"
        />
        <img
          className="w-screen h-full object-cover"
          src={data[1]}
          alt="ImageTwo"
        />
        <img
          className="w-screen h-full object-cover"
          src={data[2]}
          alt="ImageThree"
        />
        <img
          className="w-screen h-full object-cover"
          src={data[3]}
          alt="ImageFour"
        />
      </div>
      <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-24">
        <div
          onClick={prevSlide}
          className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-blue-400 duration-300"
        >
          <WestOutlinedIcon />
        </div>
        <div
          onClick={nextSlide}
          className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-blue-400 duration-300"
        >
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
