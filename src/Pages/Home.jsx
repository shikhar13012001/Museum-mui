import React, { useEffect } from "react";
import HighLights from "../components/CollectionHighlight";
import Container from "@mui/material/Container";
import History from "../components/History";
import CardComponent from "../components/CardComponent";
import Video from "../components/VIdeo";
import Events from "../components/Events";
import MockUp from "../components/MockUp";
import hoverEffect from "hover-effect";
import IMAGE1 from "../assests/GreekGod.webp";
import IMAGE2 from "../assests/GreekGod2.webp";
import TEXTURE from "../assests/textQR.webp";
import Pattern from "../assests/Group 1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import PodCast from "../components/Podcast";
import { Typography } from "@mui/material";

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    let myAnimation = new hoverEffect({
      parent: document.querySelector(".distortion"),
      intensity: 0.6,
      image1: IMAGE2,
      image2: IMAGE1,
      displacementImage: TEXTURE,
      angle: Math.PI / 8,
      speedIn: 1,
      speedOut: 1,
      imagesRatio: 880 / 697,
    });
  }, []);
  return (
    <>
      <div className="container" style={{ marginBottom: "5em" }}>
        {/* <Main data-aos="fade-up" /> */}

        <Container sx={{ width: "100%", height: "fit-content" }}>
          <Events />
          <img
            src={Pattern}
            alt="pattern"
            className="pattern"
            data-aos="zoom-out-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          />
          <MockUp />
          <Video />
        </Container>
        <Container sx={{mt:8}}>
          <Typography variant="h2" sx={{ textAlign: "left" ,mt:10,mb:5, fontFamily: "'Vujahday Script', cursive",}}>
            You can tune in to our Podcast
          </Typography>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/show/3xnvpzOU0BQoczbarnCkiZ?utm_source=generator&t=0"
            width="80%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Container>
        <div style={{ height: "7em" }}></div>
        <h1
          style={{
            fontSize: "5.5em",
            marginBottom: 20,
            textAlign: "center",
            fontFamily: "'Vujahday Script', cursive",
          }}
        >
          {" "}
          View the HighLights
        </h1>
        <HighLights />

        <History />

        <CardComponent />
      </div>
    </>
  );
};

export default Home;
