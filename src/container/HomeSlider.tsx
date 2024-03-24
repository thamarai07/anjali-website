import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseArray } from "../../utils/links";
import Image from "next/image";
import CourseIcon from "../../utils/icons";
import Link from "next/link";
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mt-14">
      <div className="lg:grid grid-cols-4 m-auto lg:justify-items-center gap-14 gap-y-24">
        {CourseIcon.map((values) => (
          <>
            <Link
              href={"course" + values.slug}
              className="bg-[#0BDA51] hover:bg-blue-500 hover:text-white hover:font-semibold transition duration-300 ease-in-out p-4 rounded text-center w-[60%] m-auto lg:block hidden "
            >
              {values.icons}
              <span className="text">{values.name}</span>
            </Link>
            <Link
              href={"course" + values.slug}
              className="bg-[#0BDA51] hover:bg-blue-500 hover:text-white hover:font-semibold p-4 rounded text-center lg:w-[60%] w-[80%] m-auto lg:hidden block mt-4 mb-8 "
            >
              {values.icons}
              <span className="text">{values.name}</span>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;
