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
      const Promises = [];
      for (let j = 0; j < Math.min(datum.total, 15); j++) {
        try {
          Promises.push(
            fetch(
              `https://afternoon-bayou-41725.herokuapp.com/object/${datum.objectIDs[j]}`
            )
          );
          // gallery.push({
          //   image: r.primaryImage,
          //   id: datum.objectIDs[j],
          //   item: r,
          // });
        } catch (e) {}
      }
      const reponse = await Promise.all(Promises);
      const objects = Promise.all(reponse.map((r) => r.json()));
      const response_objects = await objects;
      for (let i = 0; i < response_objects.length; i++) {
        gallery.push({
          image: response_objects[i].primaryImage,
          id: response_objects[i].objectID,
          item: response_objects[i],
        });
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
