import React from "react";
import Grid from "@mui/material/Grid";
const Events = (props) => {
  return (
    <Grid container={12}>
      <Grid item xs={12} md={6} lg={6} sx={{width:"100%",position:"relative",maxWidth:"400px"}}>
        <div className="mask1">Louvre Meaux</div>
      </Grid>
      <Grid item xs={12} md={5} lg={6} sx={{height:"100vh" ,width:"100%",position:"relative",textAlign:"center"}}>
        <div className="distortion" style={{position:'relative', width:"100%",height:"100%",maxWidth:"550px",display:"grid",placeContent:"center"}}></div>
      </Grid>
    </Grid>
  );
};

export default Events;
