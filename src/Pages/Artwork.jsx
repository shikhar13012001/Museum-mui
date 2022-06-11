import React from "react";
import { withRouter } from "react-router";
import Banner from "../components/Banner";
import data from "../Artist.config.data";
import Gallery from "../components/Gallery";
import ExtraArtists from "./Artists";
import { Typography, Divider } from "@mui/material";

const Artwork = (props) => {
  const desc = data[props.match.params.artist_id].Desc;
  const name = data[props.match.params.artist_id].Artist;
  const date = data[props.match.params.artist_id].Date;
  return (
    <div className="container">
      <Banner img={data[props.match.params.artist_id].image} show={true} />
      <Typography variant="h1" style={{ fontWeight: 100, textAlign: "center" }}>
        {name}
      </Typography>
      <Typography variant="h4" color="GrayText">
        {date}
      </Typography>
      <Typography
        variant="body1"
        style={{
          marginTop: "2em",
          fontSize: 24,
          width: "80%",
          textAlign: "justify",
        }}
      >
        {desc}
      </Typography>
      <Typography variant="h3" sx={{ mt: 10 }}>
        Explore artist
      </Typography>
      <div
        style={{
          width: "40vw",
          height: "1px",
          backgroundColor: "grey",
          marginBottom: "1em",
        }}
      ></div>
      {/* <div className="gg-gallery" style={{width:"100%",height:"30vh",overflow:"auto",display:'flex',justifyContent:'center'
     }}> */}
      <Gallery name={name} />
      {/* </div> */}
      <Divider
        sx={{
          width: "90%",
          height: "1px",
          backgroundColor: "grey",
          marginBottom: "1em",
        }}
      ></Divider>
      <ExtraArtists data={data} index={props.match.params.artist_id} />
    </div>
  );
};

export default withRouter(Artwork);

// <h1 style={{ fontWeight: 100 }}>More Artists</h1>
// <ExtraArtists data={data} index={props.match.params.artist_id} />
