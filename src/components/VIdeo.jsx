import React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";

const style = {
  fontFamily: "'Vujahday Script', cursive",
  fontWeight: 100,
  fontSize: "8em",
  marginBottom: "1em",
};
const History = (props) => {
  return (
    <Container sx={{ marginTop: "10em" }}>
      <h1 style={style}>{props.title || "Visit Louvre Today"}</h1>
      <Grid container columns={16} spacing={2}>
        <Grid item xs={16} lg={10} sm={16} data-aos="zoom-in-right">
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
          lg={6}
          sm={16}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Divider
            variant="middle"
            sx={{
              width: "100%",
              height: "3px",
              backgroundColor: "black",
              marginBottom: "2em",
              textAlign: "center",
            }}
          />
          <p style={{ fontWeight: "500" }}>
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
          </p>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", width: "80%", marginTop: "5em" }}
            onClick={() =>
              (window.location.href =
                "https://www.metmuseum.org/visit/plan-your-visit")
            }
          >
            Plan a Visit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(History);
