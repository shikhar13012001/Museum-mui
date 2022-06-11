import React from "react";
import Box from "@mui/material/Box";

const Banner = (props) => {
  return (
    <Box
      sx={{
        marginTop: "2em",
        width: "100%",
        height: props.show ? 350 : 0,
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPositionY: "-200px",
        backgroundRepeat: "no-repeat",
        opacity: [1, 1, 1],
      }}
    />
  );
};

export default Banner;
