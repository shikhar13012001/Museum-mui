import React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const style = {
  fontFamily: "'Allerta', sans-serif",
  fontWeight: 100,
  fontSize: "54px",
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
          lg={10}
          sm={16}
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img
            src={
              props.image ||
              "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/8f/25.jpg"
            }
            width="100%"
            height="auto"
            alt=""
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
          <p
            style={{ fontWeight: "500", maxWidth: "80vw" }}
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
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
            Empire: lupara). In the 7th century, Burgundofara (also known as
            Saint Fare), abbess in Meaux, is said to have gifted part of her .
          </p>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", width: "80%", marginTop: "5em" }}
          >
            View Wiki
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default History;
