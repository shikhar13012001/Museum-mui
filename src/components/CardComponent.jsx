import React from "react";
import { Box, Container } from "@mui/material";
import ReactPlayer from "react-player";
import "../Flickity.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
};
const CardComponent = () => {
  return (
    <Container
      sx={{ marginTop: "4em" }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    ></Container>
  );
};

export default CardComponent;
