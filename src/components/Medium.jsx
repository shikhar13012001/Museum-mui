import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "react-spring-3d-carousel"
import Box from "@mui/material/Box";
import MediumItem from "../components/MediumItem";
const Genre = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    try {
      let gallery = [];

      const res = await fetch(
        "https://afternoon-bayou-41725.herokuapp.com/medium"
      );
      const datum = await res.json();

      for (let j = 0; j < datum.medium.length; j++) {
        const r = datum.medium[j];
        gallery.push({
          key: uuidv4(),
          content: <MediumItem image={r.primaryImage} name={r.Medium} />,
        });
      }

      setData(gallery);
      setLoaded(true);
    } catch (e) {
      return;
    }
  };

  return (
    <div style={{ width: "70%", height: "300px", margin: "2em auto" }}>
      {isLoaded === false ? (
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
        <Carousel
          slides={data}
          goToSlide={0}
          offsetRadius={2}
          showNavigation={true}
          animationConfig={config.gentle}
        />
      )}
    </div>
  );
};

export default Genre;
