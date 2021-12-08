import React, { useState, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { withRouter } from "react-router";
const Images = (props) => {
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    FetchData();
    return;
    // eslint-disable-next-line
  }, [props]);
  const FetchData = async () => {
    //departments
    
    try {
      setIsLoaded(false);
      const res = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?has_images=true&q=${props.name}`
      );
      const data = await res.json();
      let images_collect = [];
      for (let i = 0; i < Math.min(data.objectIDs.length, 30); i++) {
        try { 
          let img = await fetch(
            `https://afternoon-bayou-41725.herokuapp.com/object/${data.objectIDs[i]}`
          );
         const temp= await img.json();
        
          if (!temp || !temp.objectID) {
            img = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[i]}`
            );
            await fetch(
              `https://afternoon-bayou-41725.herokuapp.com/upload/${data.objectIDs[i]}`
            );
          }
          const img_data = temp&&temp.objectID?temp:(await img.json());
 
          const obj = {
            original: img_data.primaryImageSmall,
            thumbnail: img_data.primaryImageSmall,
            id: data.objectIDs[i],
          };

          images_collect.push(obj);
        } catch (e) {}
      }
      console.log(images_collect);
      setImages(images_collect);
      setIsLoaded(true);
    } catch (e) {}
  };

  return isLoaded === false ? (
    <Box
      sx={{
        width: "90vw",
        height: "50vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box
    data-aos="fade-down-left"
      sx={{
        width: "90vw",
        marginBottom: "1em",
        position: "relative",
        height: 250,
        overflow: "auto",
      }}
    >
      <Masonry
     
        columns={props.columns || { xs: 4, sm: 5, md: 10, lg: 15 }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {images.map((item, index) => (
          <MasonryItem  className="animate__animated animate__fadeInRightBig"  key={index} >
            <img
        
              src={`${item.original}`}
              alt={item.title}
              onClick={(e) => props.history.push(`/artifact/${item.id}`)}
             
            />
          </MasonryItem>
        ))}
      </Masonry>
    </Box>
  );
};

export default withRouter(Images);
