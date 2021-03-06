import React, { useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Details from "./Details";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SearchItem = (props) => {
  const { item } = props;
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <Grid
      data-aos="fade-up"
      data-aos-duration="1000"
      container
      columns={16}
      sx={{
        border: "3px solid black",
        borderRadius: "20px",
        marginBottom: 5,
        marginTop: 5,
      }}
      spacing={1}
    >
      <Grid
        item
        xs={16}
        sm={16}
        md={3}
        lg={4}
        sx={{
          display: "grid",
          placeContent: "center",
          position: "relative",
        }}
      >
        <Link to={`/artifact/${item.objectID}`}>
          <img src={item.primaryImage} width="100%" height="100%" alt="" />
        </Link>
      </Grid>
      <Grid
        item
        md={12}
        sm={16}
        lg={12}
        sx={{ textAlign: "center", position: "relative" }}
      >
        <Typography variant="h3"> {item.title} </Typography>
        <Typography variant="h3" sx={{ fontSize: "25px" }}>
          {item.artistDisplayName}
        </Typography>
        <Typography variant="h3" color="GrayText" sx={{ fontSize: "25px" }}>
          {item.objectBeginDate + `-` + item.objectEndDate}
        </Typography>
        <Container sx={{ width: "100%" }}>
          <Details artifact={item} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default SearchItem;
