import React from "react";
import { withRouter } from "react-router";
import Banner from "../components/Banner";
import data from "../Artist.config.data";
import Gallery from "../components/Gallery";
import ExtraArtists from "./Artists";
 
const Artwork = (props) => {
  const desc = data[props.match.params.artist_id].Desc;
  const name = data[props.match.params.artist_id].Artist;
  const date = data[props.match.params.artist_id].Date;
  return (
    <div className="container">
 
      <Banner img={data[props.match.params.artist_id].image} show={true} />
      <h1 style={{ fontWeight: 100,textAlign:"center" }}>{name}</h1>
      <span>{date}</span>
      <p style={{ width: "80%", marginTop: "2em" }}>{desc}</p>
      <h3 >Explore artist</h3>
      <div
        style={{
          width: "40vw",
          height: "1px",
          backgroundColor: "grey",
          marginBottom: "1em",
        }}
      ></div>
     <div className="gg-gallery" style={{width:"100%",height:"30vh",overflow:"scroll",display:'flex',justifyContent:'center'
     }}>
      <Gallery name={name} />
 </div>
      <div
        style={{
          width: "90vw",
          height: "1px",
          backgroundColor: "grey",
          marginBottom: "1em",
        }}
      ></div>
<ExtraArtists data={data} index={props.match.params.artist_id} />
    </div>
  );
};

export default withRouter(Artwork);

      // <h1 style={{ fontWeight: 100 }}>More Artists</h1>
      // <ExtraArtists data={data} index={props.match.params.artist_id} />