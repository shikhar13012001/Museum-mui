import React from "react";
import Grid from "@mui/material/Grid";
import Art1 from "../assests/Arts/art1.jpg";
import { curveText } from "curvetext";
import { Typography } from "@mui/material";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";
const MockUp = () => {
  React.useEffect(() => {
    const circularText = document.querySelector(".circular-text");
    curveText({
      element: circularText,
      radius: 140,
      angle: 360,
    });
  }, []);
  const { ref } = useParallax({
    speed: -5,
    opacity: [0.5, 1],
    scale: [1, 1.1],
    offset: [0, 0],
  });
  const { ref: ref2 } = useParallax({
    speed: 15,
  });
  return (
    <ParallaxProvider>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          marginTop: "5em",
        }}
        columns={12}
      >
        <Grid item xs={12} lg={6} md={12} className="home-container">
          <img src={Art1} width={400} height="auto" alt="art" ref={ref} />
        </Grid>
        <Grid item xs={12} lg={6} md={12} ref={ref2}>
          <Typography variant="h4" className="circular-text" sx={{ mb: 10 }}>
            LOUVRE MEAUX . LOUVRE MEAUX .
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 24 }}>
            Stay tuned to the latest in exhibitions, partnerships,
            behind-the-scenes events, renovations, acquisitions or digital
            resources made available to visitors.
          </Typography>
        </Grid>
      </Grid>
    </ParallaxProvider>
  );
};

export default MockUp;
