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
import { HiOutlineArrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
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
          {/* <img
            src={Pattern}
            alt="pattern"
            className="pattern"
            data-aos="zoom-out-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          /> */}
          <MockUp />
          <Video />
        </Container>
        <Container sx={{ mt: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              mt: 10,
              mb: 5,
              fontFamily: "'Vujahday Script', cursive",
            }}
          >
            You can tune in to our Podcast
          </Typography>
          <iframe
            title="podcast"
            src="https://open.spotify.com/embed/episode/4EYuyvPQ4wae4ebGVaODKp?utm_source=generator"
            width="100%"
            height="332"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Container>
        <div style={{ height: "7em" }}></div>
        <Typography
          fontSize={{
            xs: "3em",
            sm: "3.8em",
            md: "4.5em",
            lg: "5.5em",
          }}
          sx={{
            marginBottom: 1,
            textAlign: "center",
          }}
        >
          {" "}
          View the HighLights
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 20,
            sm: 20,
            md: 24,
            lg: 30,
          }}
          sx={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          Swipe to the right to view more <HiOutlineArrowRight />
        </Typography>
        <HighLights />

        <History />

        <CardComponent />
      </div>
    </>
  );
};

export default Home;
