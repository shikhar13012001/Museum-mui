import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import SearchItem from "./SearchedItem";
import CircularProgress from "@mui/material/CircularProgress";
export default function CustomizedInputBase() {
  const [searchResult, setSearch] = useState(null);
  const [search, setSearchData] = useState(null);
  const [Shouldsearch, setShouldSearch] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();

    setShouldSearch(() => !Shouldsearch);
  };
  useEffect(() => {
    fetchData();
  }, [Shouldsearch]);
  const fetchData = async () => {
    try {
      if (!search) {
        setSearch(null);
        return;
      }
      setisLoaded(false);
      setSearch(true);
      const gallery = [];
      const data = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`
      );
      const res = await data.json();
      
      const Promises = [];
      for (let i = 0; i < Math.min(res.total, 20); i++) {
        Promises.push(
          fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${res.objectIDs[i]}`
          )
        );
      }
      const response = await Promise.all(Promises);
      const objects = Promise.all(response.map((r) => r.json()));
      const response_objects = await objects;
      for (let i = 0; i < response_objects.length; i++) {
        if (!response_objects[i].objectID) continue;
        gallery.push(response_objects[i]);
        // console.log(response_objects[i]);
      }
      console.log("gallery", gallery);
      setSearch(gallery);
      setisLoaded(true);
    } catch (e) {}
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "90%",
          marginTop: "4em",
          border: "3px solid black",
          borderRadius: "5px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for Artist, Artwork ..."
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          onSubmit={handleSearch}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {searchResult &&
        (isLoaded ? (
          <Container sx={{ width: "100%", minHeight: "fit-content" }}>
            {searchResult.map((item, index) => (
              <SearchItem item={item} key={index} />
            ))}
          </Container>
        ) : (
          <Container
            sx={{
              width: "100%",
              minHeight: "50vh",
              display: "grid",
              placeContent: "center",
            }}
          >
            <CircularProgress />
          </Container>
        ))}
    </>
  );
}
