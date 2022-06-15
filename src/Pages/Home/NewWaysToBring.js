import React, { useEffect } from "react";
import Slider from "react-slick";
import "./HomePage.css"
// import LandingPageCrousel from "./LandingPageCrousel";
// import LandingPageCrouseltwo from "./LandingPageCrouseltwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CarouselVideo from "./CarouselVideo";

export function NewWaysToBring() {
  return (

         <div style={{margin:"30px"}}>
                
      <p className='HeadingOfHomePage'>New Ways To Bring Home Spring</p>
      <div className="notinmobile">
        <Slider
          autoplay={true}
          outplayspeed={1000}
          dots
          arrows={false}
          initalslide={1}
          infinite={true}
        >
          <div>
          <img src="https://i.imgur.com/8ihr2JJ.png" alt="" />
          </div>
         
          <div>
          <img src="https://i.imgur.com/Af5UHFj.png" alt="" />
          </div>
         
        </Slider>
      </div>
    </div>
  );
}
