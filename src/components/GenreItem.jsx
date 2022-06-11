import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GenreItem = (props) => {
  return (
    <div className="GenreItem">
      <Link to={`/culture/${props.name}`}>
        <div
          className="GenreImage"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </Link>
      <div className="GenreDescription">
        <Typography variant="h4">{props.name}</Typography>
      </div>
    </div>
  );
};

export default GenreItem;
