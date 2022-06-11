import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Loading from "../components/loading";
import data from "../Artist.config.data";
import Details from "../components/Details";
import Gallery from "../components/Gallery";
import ExtraArtists from "./Artists";
import server from "../utils/server";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Typography } from "@mui/material";
import Flickity from "react-flickity-component";
const Line = (props) => (
  <div
    style={{
      width: props.size,
      height: "1px",
      backgroundColor: "grey",
      marginBottom: "1em",
      marginTop: "2em",
    }}
  ></div>
);

const Artifact = (props) => {
  const [artifact, setArtifact] = useState(null);
  const [PrimaryImage, setPrimaryImage] = useState("");
  const [artiFactInfo, setInfo] = useState(null);
  const ID = props.match.params.id;
  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [props.match.params.id]);
  const FetchData = async () => {
    try {
      setInfo(null);
      let img = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`
      );

      const data = await img.json();
      setArtifact(data);
      console.log("additonal", data?.additionalImages);
      setPrimaryImage(data.primaryImageSmall);
      const Info = await fetch(`${server}/${ID}`);
      const { message, err } = await Info.json();
      if (err) {
        setInfo(err);
      } else {
        setInfo(message);
      }
    } catch (e) {
      return;
    }
  };
  const options = {
    freeScroll: true,
    initialIndex: 2,
    dots: false,
  };
  return artifact ? (
    <div className="container" style={{ textAlign: "center" }}>
      <img src={PrimaryImage} style={{ marginTop: "3em" }} alt="" />
      <Line size={"100vw"} />

      <Typography variant="h1" sx={{ textAlign: "center" }}>
        {artifact.title}
      </Typography>
      <Typography variant="h3" sx={{ color: "#5e5c5c" }}>
        {artifact.artistDisplayName}
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          style={{
            width: "80%",
            fontSize: 21,
            textAlign: "left",
            margin: "30px 0",
          }}
        >
          {artiFactInfo ? artiFactInfo : <LinearProgress />}
        </Typography>
        <Details artifact={artifact} />
      </Container>
      <Typography variant="h4" sx={{ fontSize: "2em", marginBottom: "2em" }}>
        More Artifacts
      </Typography>
      <Gallery name={artifact.artistDisplayName} count={50} />
      <div style={{ marginBottom: "5em" }}></div>
      <Typography variant="h4" sx={{ fontSize: "2em", marginBottom: "2em" }}>
        More Artists
      </Typography>
      <ExtraArtists data={data} />
    </div>
  ) : (
    <Loading />
  );
};

export default withRouter(Artifact);
