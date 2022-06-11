import React, { useEffect } from "react";
import Genre from "../components/Genre";
import Box from "@mui/material/Box";
import Medium from "../components/Medium";
import MoreArtists from "./Artists";
import Search from "../components/Search.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
const Collections = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="container">
      <Search />
      <Box
        mt={10}
        sx={{ width: "100%", height: "400px", mb: 10, textAlign: "center" }}
      >
        <Typography variant="h3" sx={{ mb: 10 }}>
          More Cultures
        </Typography>
        <Genre />
      </Box>

      <Box
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        mt={25}
        sx={{ width: "100%", height: "500px", mb: 10, textAlign: "center" }}
      >
        <Typography variant="h3" sx={{ mb: 10 }}>
          More Mediums
        </Typography>
        <Medium />
      </Box>

      <MoreArtists show={false} />
    </div>
  );
};
export default Collections;
