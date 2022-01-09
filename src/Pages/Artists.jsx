import React from "react"; 
import Banner from "../components/Banner";
import Artist from "../components/Artist";
import data from "../Artist.config.data";
 
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";
 import Flickity from "react-flickity-component";
 import "../Flickity.css"
 import ArtistHighlight from "../components/CollectionHighlight"

const Artists = (props) => {
  const options={
    wrapAround: true, 
    freeScroll:true
  }
  const u="https://c4.wallpaperflare.com/wallpaper/743/193/102/vincent-van-gogh-painting-the-starry-night-classic-art-wallpaper-preview.jpg"
  return (
 <>
 <Banner img={u} show={ props.show||false}/>
 <h1 style={{textAlign:"center"}}>The Artists</h1>
  <Flickity
     
      elementType={'div'} // default 'div'
      options={options} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
      style={{marginTop:"4em"}}
    >
{data.map((item, index) => (
           
            <Artist item={item} index={index} />
        
        ))}
    </Flickity>
    <h2 style={{textAlign:'center'}}>Artworks of the day</h2>
<ArtistHighlight query={"vermeer"} />
    </>
    
  );
};

export default Artists;
 


   