import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageGallery from "react-image-gallery";
import CircularProgress from "@mui/material/CircularProgress";
import { withRouter } from "react-router";

const MoreArtifacts = (props) => {
  const artist = props.artist;

  const [data, setData] = useState(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, []);
  const FetchData = async () => {
    const res = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?has_images=true&q=${
        artist || "vermeer"
      }`
    );
    const data = await res.json();
    const gallery = [];
    const mpp = new Map();

    for (let i = 0; i < Math.min(30, data.total); i++) {
      let img = await fetch(
        `https://afternoon-bayou-41725.herokuapp.com/object/${data.objectIDs[i]}`
      );
      const temp = await img.json();

      if (!temp || !temp.objectID) {
        img = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[i]}`
        );
        await fetch(
          `https://afternoon-bayou-41725.herokuapp.com/upload/${data.objectIDs[i]}`
        );
      }
      const img_data = temp && temp.objectID ? temp : await img.json();
      const obj = {
        original: img_data.primaryImage,
        thumbnail: img_data.primaryImageSmall,
      };
      mpp.set(img_data.primaryImage, data.objectIDs[i]);

      gallery.push(obj);
    }
    setMap(mpp);
    setData(gallery);
  };

  return data ? (
    <div style={{ width: "80%", height: "30vh", marginTop: "5em" }}>
      <ImageGallery
        autoPlay={true}
        showThumbnails={false}
        lazyLoad={true}
        showNav={false}
        items={data}
        onClick={(e) => {
          props.history.push(`/artifact/${map.get(e.target.currentSrc)}`);
        }}
      />
      )
    </div>
  ) : (
    <Box
      sx={{
        width: "100%",
        height: "30vh",
        marginTop: "5em",
        display: "grid",
        placeContent: "center",
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default withRouter(MoreArtifacts);

// props.history.push(`/artifact/${map.get(e.target.currentSrc)}`)
