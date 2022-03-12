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
  const FetchData = React.useCallback(async () => {
    //departments
    try {
      setIsLoaded(false);
      const res = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?has_images=true&q=${props.name}`
      );
      const data = await res.json();
      let images_collect = [];
      const Promises = [];
      for (let i = 0; i < Math.min(data.objectIDs.length, 30); i++) {
        try {
          Promises.push(
            fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[i]}`
            )
          );
 
        } catch (e) {}
      }

      const img_data = await Promise.all(Promises);
      const images_collect_data = Promise.all(
        img_data.map((img) => img.json())
      );
      const response = await images_collect_data;
      console.log(response);
      for (let i = 0; i < Math.min(data.objectIDs.length, 30); i++) {
        const obj = {
          original: response[i].primaryImageSmall,
          thumbnail: response[i].primaryImageSmall,
          id: data.objectIDs[i],
        };

        images_collect.push(obj);
      }
      setImages(images_collect);
      setIsLoaded(true);
      return images_collect;
    } catch (e) {}
  }, [props.name]);

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
          <MasonryItem key={index}>
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
