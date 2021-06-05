import Slider from "react-slick";
import Image from 'Next/image';
//IMPORT MODULE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { myLanguages } from '../Paths';
import React from "react";


export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay:true,
    arrows: false,
    className:""
  };

  return(


        <React.Fragment>
          <div className="mx-auto w-56 mt-10">
          {/*JSON.stringify(myLanguages)*/}
          <Slider {...settings} className="mx-auto w-full">
            {myLanguages ? myLanguages.map(elem => <div className="z-10 block text-white"><Image src={elem} height={360} width={360} /></div>): null}
            
            {/*
            <div className="z-10 block text-white"><Image/></div>
            <div className="z-10 block text-white"><Image/></div>
            <div className="z-10 block text-white"><Image/></div>
            */}
          </Slider>
          </div>
        </React.Fragment>

    );
}
