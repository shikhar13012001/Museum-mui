import React, { useEffect } from "react";
import HighLights from "../components/CollectionHighlight";
import Container from "@mui/material/Container";
import History from "../components/History";
import CardComponent from "../components/CardComponent";
import Video from "../components/VIdeo";
import Events from "../components/Events";
import MockUp from "../components/MockUp";
import hoverEffect from "hover-effect";
import IMAGE1 from "../assests/GreekGod.png";
import IMAGE2 from "../assests/GreekGod2.png";
import TEXTURE from "../assests/textQR.jpg";
import Pattern from "../assests/Group 1.png";
import AOS from "aos";
import "aos/dist/aos.css";

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
