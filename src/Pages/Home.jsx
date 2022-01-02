import React, { useEffect } from "react";
import HighLights from "../components/CollectionHighlight";
import Container from "@mui/material/Container";
import History from "../components/History";
import CardComponent from "../components/CardComponent";
import Video from "../components/VIdeo";
import Events from "../components/Events";
import MockUp from "../components/MockUp";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <>
      <div className="container" style={{ marginBottom: "5em" }}>
        {/* <Main data-aos="fade-up" /> */}

        <Container sx={{ width: "100%", height: "fit-content" }}>
          <Events />
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
