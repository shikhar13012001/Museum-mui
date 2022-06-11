import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const MediumItem = (props) => {
  return (
    <div className="GenreItem">
      <Link to={`/medium/${props.name}`}>
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

export default MediumItem;
