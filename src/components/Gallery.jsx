import React, { useState, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { withRouter } from "react-router";
import { Typography } from "@mui/material";
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
const Images = (props) => {
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExtraLoaded, setIsExtraLoaded] = useState(false);
  const listInnerRef = React.useRef();
  const [page, setPage] = useState(1);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.abs(scrollTop + clientHeight - scrollHeight) <= 2) {
        setPage((p) => p + 1);
      }
    }
  };
  useEffect(() => {
    setPage(1);
    setImages([]);
    FetchData();
    // eslint-disable-next-line
  }, [props.match.params.id]);
  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, []);
  const FetchData = async () => {
    //departments
    try {
      if (page === 1) {
        setIsLoaded(false);
      } else {
        setIsExtraLoaded(false);
      }
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
        } catch (e) {
          console.log(e);
        }
      }

      const img_data = await Promise.all(Promises);
      const images_collect_data = Promise.all(
        img_data.map((img) => img.json())
      );
      const response = await images_collect_data;

      for (let i = 0; i < response.length; i++) {
        if (!response[i]) {
          continue;
        }
        const obj = {
          original: response[i].primaryImageSmall,
          thumbnail: response[i].primaryImageSmall,
          id: data.objectIDs[i],
        };

        images_collect.push(obj);
      }

      if (!arraysEqual(images, images_collect)) {
        setImages([...images, ...images_collect]);
      }
      if (page === 1) {
        setIsLoaded(true);
        setIsExtraLoaded(true);
      } else {
        setIsExtraLoaded(true);
      }

      return images_collect;
    } catch (e) {
      console.log(e);
    }
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
      sx={{
        width: "90vw",
        marginBottom: "1em",
        position: "relative",
        height: 250,
        overflow: "auto",
      }}
      onScroll={onScroll}
      ref={listInnerRef}
    >
      {images.length > 0 ? (
        <Masonry
          columns={props.columns || { xs: 4, sm: 5, md: 10, lg: 15 }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {images.map((item, index) => (
            <MasonryItem key={index}>
              <img
                src={`${item.thumbnail}`}
                alt={item.title}
                onClick={(e) => props.history.push(`/artifact/${item.id}`)}
              />
            </MasonryItem>
          ))}
          {/* {isExtraLoaded?null:<CircularProgress />} */}
        </Masonry>
      ) : (
        <Typography variant="h6" color="textSecondary" align="center">
          No Images Found
        </Typography>
      )}
    </Box>
  );
};

export default withRouter(Images);
