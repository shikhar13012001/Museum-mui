import React, { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HeroSlide from "./HeroSlide";
const Genre = (props) => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    FetchData();
    // eslint disable next-line
  }, []);
  const FetchData = async () => {
    try {
      let gallery = [];

      const res = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${
          props.query || "Vermeer"
        }`
      );
      const datum = await res.json();
      
      for (let j = 0; j < Math.min(datum.total, 15); j++) {
        try {
          let img = await fetch(
            `https://afternoon-bayou-41725.herokuapp.com/object/${datum.objectIDs[j]}`
          );
         const temp= await img.json();
        
          if (!temp || !temp.objectID) {
            img = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${datum.objectIDs[j]}`
            );
            await fetch(
              `https://afternoon-bayou-41725.herokuapp.com/upload/${datum.objectIDs[j]}`
            );
          }
          const r = temp&&temp.objectID?temp:(await img.json());
 
          gallery.push({
            image: r.primaryImage,
            id: datum.objectIDs[j],
            item: r,
          });
        } catch (e) {
        
        }
      }

      setData(gallery);
      setLoaded(true);
    } catch (e) {}
  };

  return isLoaded === false ? (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <HeroSlide image={data} />
  );
};

export default Genre;
