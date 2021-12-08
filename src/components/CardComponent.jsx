import React from "react";
import Card from "./Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
const CardComponent = () => {
  return (
    <Container
      sx={{ marginTop: "4em" }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h1
        style={{
          fontSize: "54px",
          whiteSpace: "nowrap",
          fontFamily: "Allerta",
          width: "100%",
        }}
      >
        Book a Visit
      </h1>
      <Grid container columns={16}>
        <Grid
          item
          xs={16}
          lg={10}
          sm={16}
          sx={{ display: "grid", placeContent: "center" }}
        >
          <Card />
        </Grid>
        <Grid
          item
          xs={16}
          lg={6}
          sm={16}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
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
          <p style={{ fontWeight: "bold" }}>
            we cordially invite you to visit this exhibition of art and witness
            the work of (name) on (date time and place lets join this day and
            witness this wonderful act as we, institute (name) organize an
            awesome art exhibition on behalf of (event name) and hence make this
            day worth remembering we cordially invite you to be a part of this
            great day as we demonstrate the best of fashion on the art
            exhibition held on (date-time pace) and you are invited as well
          </p>
          <Button
            variant="contained"
            sx={{
              width: "80%",
              marginTop: "3em",
              fontFamily: "Allerta",
              backgroundColor: "#0307fc",
            }}
            onClick={() =>
              (window.location.href =
                "https://www.metmuseum.org/visit/plan-your-visit")
            }
          >
            RSVP Now!
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "80%",
              marginTop: "3em",
              fontFamily: "Allerta",
              backgroundColor: "black",
            }}
            onClick={() =>
              (window.location.href =
                "https://www.metmuseum.org/visit/plan-your-visit")
            }
          >
            Plan A team Visit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardComponent;
