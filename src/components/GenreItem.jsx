import React from "react";
import { Link } from "react-router-dom"

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
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default GenreItem;
