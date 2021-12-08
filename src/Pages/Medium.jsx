import React, { useState, useEffect } from "react";
import Loading from "../components/loading";
import { withRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import SearchItem from "../components/SearchedItem";
const Medium = (props) => {
  const [startPage, setStartPage] = useState(false);
  const [page, setPage] = useState(1);
  const [PageResult, setPageResult] = useState(null);
  const [objects, setObjects] = useState(null);
  useEffect(() => {
    FetchData();
  }, []);
  useEffect(() => {
    Paginate();
  }, [startPage, page]);
  const handlePage = async (e, v) => {
    setPage(v);
  };
  const Paginate = async () => {
    if (!objects) return;
    console.log("worked");
    const gallery = [];
    for (
      let i = (page - 1) * 15 + 1;
      i < Math.min(objects.total, (page - 1) * 15 + 16);
      i++
    ) {
      let img = await fetch(
        `https://afternoon-bayou-41725.herokuapp.com/object/${
          objects.objectIDs[i - 1]
        }`
      );
console.log(img);
      if (!img.objectID) {
        img = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${
            objects.objectIDs[i - 1]
          }`
        );
        await fetch(`https://afternoon-bayou-41725.herokuapp.com/upload/${objects.objectIDs[i - 1]}`);

      }
      const response = await img.json();
      console.log(response);
      gallery.push(response);
    }
    console.log(gallery);
    setPageResult(gallery);
  };
  const FetchData = async () => {
    const type = props.match.params.medium;
    const url =
      type === "medium"
        ? `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=${props.match.params.type}&q=art`
        : `https://collectionapi.metmuseum.org/public/collection/v1/search?has_images=true&q=${props.match.params.type}`;

    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
    setObjects(res);
    setStartPage(true);
  };

  return PageResult && objects ? (
    <Container sx={{ width: "100%", textAlign: "center", minHeight: "100vh" }}>
      <h1 style={{ fontFamily: "'Allerta',serif" }}>
        {props.match.params.type}
      </h1>
      <Divider color="black" sx={{ marginTop: "2em" }} />
      {PageResult.map((item, index) => (
        <SearchItem item={item} key={index} />
      ))}
      <Pagination
        count={Math.ceil(objects.total / 15)}
        shape="rounded"
        page={page}
        onChange={handlePage}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </Container>
  ) : (
    <Loading />
  );
};

export default withRouter(Medium);
