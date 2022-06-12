import React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";
import Art2 from "../assests/Arts/art2.jpg";
import Art3 from "../assests/Arts/art3.jpg";
import Art4 from "../assests/Arts/art4.jpg";
import { curveText } from "curvetext";

const style = {
  fontFamily: "'Vujahday Script', cursive",
  fontWeight: 100, 
  marginBottom: "1em",
};

const History = (props) => {
  const { ref } = useParallax({
    speed: -10,
  });
  const { ref: ref2 } = useParallax({
    speed: 10,
  });

  const { ref: ref3 } = useParallax({
    speed: -10,
  });
  const { ref: ref4 } = useParallax({
    speed: 10,
  });
  const { ref: ref5 } = useParallax({
    speed: -16,
  });
  const { ref: ref6 } = useParallax({
    speed: 10,
  });
  React.useEffect(() => {
    const TextRef = document.querySelectorAll(".text-video");
    TextRef.forEach((ref) =>
      curveText({
        element: ref,
        radius: 120,
        angle: 360,
      })
    );
  }, []);
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography
        variant="h1"
        fontSize={{
          xs: "4em",
          sm: "4.5em",
          md: "5.5em",
          lg: "6.5em",
        }}
        sx={style}
      >
        {props.title || "Visit Louvre Today"}
      </Typography>
      <Grid container columns={16} spacing={2} sx={{ mb: 20 }}>
        <Grid item xs={16} lg={16} sm={16} data-aos="zoom-in-up">
          <ReactPlayer
            url="https://api-www.louvre.fr/sites/default/files/videos/video_5_4_960/video.mp4"
            muted={true}
            loop={true}
            playing={true}
            width={"100%"}
            height={"auto"}
          />
        </Grid>
        <Grid
          item
          xs={16}
          lg={16}
          sm={16}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
        >
          <Divider
            variant="middle"
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "grey",
              marginBottom: "2em",
              textAlign: "center",
            }}
          />
          <Typography
            variant="body1"
            fontSize={{
              xs:18,
              sm:20,
              md:24,
              lg:30,
            }}
            style={{ fontWeight: "500", textAlign: "justify" }}
          >
            The Louvre Palace, which houses the museum, was begun by King Philip
            II in the late 12th century to protect the city from the attack from
            the West, as the Kingdom of England still held Normandy at the time.
            Remnants of the Medieval Louvre are still visible in the
            crypt.Whether this was the first building on that spot is not known,
            and it is possible that Philip modified an existing tower. The
            origins of the name "Louvre" are somewhat disputed. According to the
            authoritative Grand Larousse encyclopédique, the name derives from
            an association with wolf hunting den (via Latin: lupus, lower
            Empire: lupara).
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", width: "20em", marginTop: "5em" }}
            onClick={() =>
              (window.location.href =
                "https://www.metmuseum.org/visit/plan-your-visit")
            }
          >
            <Typography
              variant="body1"
              style={{ fontWeight: "500", fontSize: 30, color: "white" }}
            >
              Plan a Visit
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container columns={12} sx={{ mb: 20 }}>
        <Grid item xs={12} sm={12} md={12} lg={6} ref={ref}>
          <img
            src={Art2}
            alt="art"
            style={{ width: "100%", height: "auto", maxWidth: 400 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          ref={ref2}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ position: "relative", m: 10 }}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold" }}
              className="text-video"
            >
              AMBIENCE * AMBIENCE *{" "}
            </Typography>
          </Box>
          <Typography variant="body1" style={{ fontSize: 24 }}>
            The Louvre is a museum in Paris, France. It is the largest art
            museum in the world.
          </Typography>
        </Grid>
      </Grid>
      <Grid container columns={12} sx={{ mb: 30 }} spacing={4}>
        <Grid
          item
          lg={6}
          ref={ref4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ position: "relative", m: 10 }}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold" }}
              className="text-video"
            >
              AMBIENCE * AMBIENCE *{" "}
            </Typography>
          </Box>
          <Typography variant="body1" style={{ fontSize: 24 }}>
            The Louvre is a museum in Paris, France. It is the largest art
            museum in the world.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} ref={ref3}>
          <img
            src={Art3}
            alt="art"
            style={{ width: "100%", height: "auto", maxWidth: 400 }}
          />
        </Grid>
      </Grid>
      <Grid container columns={12} sx={{ mb: 30 }}>
        <Grid item xs={12} sm={12} md={12} lg={6} ref={ref5}>
          <img
            src={Art4}
            alt="art"
            style={{ width: "100%", height: "auto", maxWidth: 400 }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          ref={ref6}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ position: "relative", m: 10 }}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold" }}
              className="text-video"
            >
              AMBIENCE * AMBIENCE *{" "}
            </Typography>
          </Box>
          <Typography variant="body1" style={{ fontSize: 24 }}>
            The Louvre is a museum in Paris, France. It is the largest art
            museum in the world.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(History);
