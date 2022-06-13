import React from "react";
import { Typography, Grid } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import Marquee from "react-fast-marquee";
import Image1 from "../assests/Home/arnolfini-portrait-1.jpeg";
import Image2 from "../assests/Home/botticelli-1.jpg";
import Image3 from "../assests/Home/caravaggio-calling-of-saint-matthew.jpeg";
import Image4 from "../assests/Home/james-abbott-mcneill-whistler-facts-5.jpeg";
import Image5 from "../assests/Home/napoleon-crossing-the-alps-painting-1.jpg";
import Image6 from "../assests/Home/raphael-school-of-athens-1.jpeg";
const Events = (props) => {
  return (
    <Grid container={12}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          width: "100%",
          position: "relative",
          height: "70vh",
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Parallax speed={-15}>
          <Typography
            variant="h1"
            fontSize={{
              xs: 100,
              sm: 100,
              md: 120,
              lg: 160,
            }}
            sx={{ textAlign: "center" }}
            className="animate__animated animate__fadeInUp"
          >
            Built for History
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", fontSize: 32 }}
            className="animate__animated animate__fadeInUp animate__delay-1s"
          >
            Live out of your imagination, not your history.
          </Typography>
        </Parallax>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Parallax speed={-5}>
          <Marquee
            speed={200}
            gradient={false}
            style={{ background: "transparent", marginTop: 20 }}
            className="animate__animated animate__fadeInUp animate__delay-2s"
          >
            <img
              src={Image1}
              width={300}
              height="auto"
              style={{ marginRight: 10 }}
              alt="Arnolfini"
            />
            <img
              src={Image2}
              width={300}
              height="auto"
              style={{ marginRight: 10 }}
              alt="Botticelli"
            />
            <img
              src={Image3}
              width={300}
              height="auto"
              style={{ marginRight: 10 }}
              alt="Caravaggio"
            />
            <img
              src={Image4}
              width={300}
              height="auto"
              style={{ marginRight: 10 }}
              alt="McNeill"
            />
            <img
              src={Image5}
              width={300}
              height="auto"
              style={{ marginRight: 10 }}
              alt="Napoleon"
            />
            <img
              src={Image6}
              width={300}
              height="auto"
              style={{ marginRight: 10 }}
              alt="Raphael"
            />
          </Marquee>
        </Parallax>
      </Grid>
    </Grid>
  );
};

export default Events;
