import React, { useState } from 'react';
import {Link} from "react-router-dom"
// react-id-swiper
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

// custom css
import Button from "@mui/material/Button"
import '../HeroSlider.css';

// slider configuration
const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1500,
  spaceBetween: 0,
  effect: 'slide',
  draggable:true,
  loop:true
};

// slider component
const HeroSlider = (props) => {
    console.log(props.image)
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
    
    {props.image.map((item,index)=>(
      <div className="hero-slide">
      
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
          key={index}
          style={{backgroundImage:`url(${item.image})`}}
        >
        <div className="overlay">
        <h1 style={{fontSize:44,  color:"white",textAlign:"center"}}>{item.item.title}</h1>
        <h4 style={{  color:"white",marginBottom:"2em"}}>
        {item.item.artistDisplayName}
        </h4>
         <Link to={`/artifact/${item.id}`}>
<Button variant="outlined" sx={{color:"white",border:"1px solid white",outline:"none"}}> View HighLight</Button>
        </Link>
        </div>
         
        </div>
        
      </div>))
      }
       
    </Swiper>
  );
};

export default HeroSlider;
