import React from "react";
import Header from "../components/header";
import Genre from "../components/Genre";
import Box from "@mui/material/Box";
import Medium from "../components/Medium"
import MoreArtists from "./Artists"
import Search from "../components/Search.jsx"
// import CollectionHighlight from "../components/CollectionHighlight"
const Collections=()=>{

    return (
       <div className="container">
       <Search />
       <Box mt={10} sx={{width:"100%",height:"300px",textAlign:'center'}}>
       <h3>More Cultures</h3>
        <Genre/>
        </Box>
        <div
        style={{
          width: "40vw",
          height: "1px",
          backgroundColor: "grey",
          marginBottom: "1em",
        }}
      ></div>

            <Box mt={25} sx={{width:"100%",height:"300px",textAlign:'center'}}>
       <h3>More Mediums</h3>
        <Medium/>
        </Box>
        <div
        style={{
          width: "40vw",
          height: "1px",
          backgroundColor: "grey",
          marginBottom: "10em",
        }}
      ></div>
       <MoreArtists show={false} />
        </div>
        
        )
}
export default Collections