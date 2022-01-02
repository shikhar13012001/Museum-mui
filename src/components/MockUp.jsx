import React from "react";
import Grid from "@mui/material/Grid"
const MockUp = () => {
  return (
    <Grid container
      sx={{
        display: "flex",
        justifyContent: "space-around",

        position: "relative",
        marginTop: "5em",
        overflow: "auto",
      }}
    >
    <Grid item>
      <div className="mockUp"></div>
      </Grid>
      <Grid item>
      <div className="app-detail">
        <h1>Those who don't remeber history tend to repeat</h1>
        <p>
          Not long from now we will available in the app Store, we really enjoy
          delivering high quality content to you, this App is an experimental
          project. soon we will be available to all of you.
          Thankyou
        </p>
      </div>
      </Grid>
    </Grid>
  );
};

export default MockUp;
