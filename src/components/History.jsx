import React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IMAGE from "../assests/louvre.jpg";
import { Typography } from "@mui/material";
const style = {
  fontFamily: "'Vujahday Script', cursive",
  fontWeight: 100,
  fontSize: "6em",
  marginBottom: "1em",
};
const History = (props) => {
  return (
    <Container sx={{ marginTop: "10em" }}>
      <h1 style={style}>{props.title || "History of the Louvre"}</h1>
      <Grid container columns={16} spacing={2}>
        <Grid
          item
          xs={16}
          lg={16}
          sm={16}
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img src={props.image || IMAGE} width="100%" height="auto" alt="" />
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
          <Typography
            variant="h2"
            sx={{ mb: 5, textAlign: "left", width: "100%" }}
          >
            The architecture of the Louvre.
          </Typography>
          <Typography
            style={{ fontWeight: "500", maxWidth: "80vw", fontSize: "1.5em" }}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            The story begins near the remains of the first Louvre, a medieval
            fortress built by King Philippe-Auguste in about 1200. Follow the
            fortress wall to find the Salle de la Maquette, dedicated to the
            architecture of the Louvre. The presentation explains the many
            transformations that have marked the history of the palace and the
            ornamental additions made by great artists, from Jean Goujon who
            carved many decorative elements in the 16th century to Jean-Baptiste
            Carpeaux who designed sculptures for the Pavillon de Flore three
            centuries later.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default History;
