import React, { useState, useEffect } from "react";
import GenreItem from "./GenreItem";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Genre = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    let gallery = [];

    const res = await fetch(
      "https://afternoon-bayou-41725.herokuapp.com/culture"
    );
    const datum = await res.json();

    for (let j = 0; j < datum.culture.length; j++) {
      const r = datum.culture[j];
      gallery.push({
        key: uuidv4(),
        content: <GenreItem image={r.primaryImage} name={r.DisplayName} />,
      });
    }

    gallery.map((item, index) => {
      return { ...item, onClick: () => this.setState({ goToSlide: index }) };
    });
    setData(gallery);
    setLoaded(true);
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
