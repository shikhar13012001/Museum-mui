import React from "react";
const Line = (props) => (
  <div
    style={{
      width: props.size,
      height: "1px",
      backgroundColor: "grey",
      marginBottom: "1em",
      marginTop: "2em",
    }}
  ></div>
);
const Details = ({ artifact }) => {
  return (
    <div className="details">
      <span>
        <strong style={{ fontWeight: "bold" }}>Title: </strong>
        {artifact.title}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Date: </strong>
        {`${artifact.objectBeginDate}-${artifact.objectEndDate}`}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Author: </strong>
        {artifact.artistDisplayName}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Medium: </strong>
        {artifact.medium}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Dimensions: </strong>
        {artifact.dimensions}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Muesuem: </strong>
        {artifact.repository}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Classification: </strong>
        {artifact.classification}
      </span>

      <Line />
    </div>
  );
};

export default Details;
