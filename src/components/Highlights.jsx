import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

const Highlights = (props) => {
  const [text, setText] = useState(null);
  useEffect(() => {
    fetchText();
  });
  const fetchText = async () => {
    try {
      const res = await fetch(`http://localhost:8000/${props.id}`);
      const data = await res.json();
      setText(data.message);
    } catch (e) {}
  };
  return (
    <Container
      sx={{
        width: "80vw",
        height: "300px",
        position: "relative",
        overflowX: "hidden",
        backgroundColor: "white",
      }}
    >
      <Grid container columns={16} spacing={1}>
        <Grid item xs={4} sx={{ objectFit: "cover" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: `url(${props.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          ></div>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", height: "300px" }}>
          <h3>{props.item.title}</h3>
          <p style={{ fontSize: "20px" }}>{props.item.artistDisplayName}</p>
          <p style={{ fontSize: "20px" }}>
            {props.item.objectBeginDate} {props.item.objectEndDate}
          </p>
          <p>{text}</p>
        </Grid>
      </Grid>
    </Container>
  );
};

// <div className="Highlight" style={{backgroundImage:`url(${props.image})`}}>
//     <Link to={`/artifact/${props.id}`}>
//       <div className="Banner-desc">
//         <Button variant="outlined" sx={{color:"white",fontSize:"bold",border:"2px solid white"}}>
//           View Highlight
//         </Button>
//       </div>
//       </Link>
//     </div>
export default Highlights;
