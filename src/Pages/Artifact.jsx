import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Loading from "../components/loading";
import data from "../Artist.config.data";
import Details from "../components/Details";
import Gallery from "../components/Gallery";
import ExtraArtists from "./Artists";
import server from "../utils/server";
import LinearProgress from "@mui/material/LinearProgress";
import { Container } from "@mui/material";
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
        `https://afternoon-bayou-41725.herokuapp.com/object/${ID}`
      );

      const temp = await img.json();
      if (!temp || !temp.objectID) {
        img = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`
        );
        await fetch(`https://afternoon-bayou-41725.herokuapp.com/upload/${ID}`);
      }

      const data = temp && temp.objectID ? temp : await img.json();
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
    wrapAround: true,
    freeScroll: true,
    initialIndex: 2,
  };
  return artifact ? (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        src={PrimaryImage}
        width="400px"
        height="400px"
        style={{ marginTop: "3em" }}
        alt=""
      />
      <Line size={"100vw"} />
      <Flickity
        elementType={"div"} // default 'div'
        options={options} // takes flickity options {}
        disableImagesLoaded={false} // default false
        // default false
        static // default false
        style={{ marginTop: "4em" }}
      >
        {artifact.additionalImages.map((item, index) => (
          <img
            src={item}
            key={index}
            alt=""
            width="60px"
            height="60px"
            style={{ borderRadius: "10px", margin: "2px" }}
            onClick={() => setPrimaryImage(item)}
          />
        ))}
      </Flickity>
      <h1 style={{ fontSize: "3em", textAlign: "center" }}>{artifact.title}</h1>
      <h5 style={{ fontSize: "1.3em", color: "#5e5c5c" }}>
        {artifact.artistDisplayName}
      </h5>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ width: "80%", textAlign: "left", fontStyle: "italic" ,margin:"30px 0" }}>
          {artiFactInfo ? artiFactInfo : <LinearProgress />}
        </p>
        <Details artifact={artifact} />
      </Container>
      <h5 style={{ fontSize: "2em", marginBottom: "2em" }}>More Artifacts</h5>
      <Gallery name={artifact.artistDisplayName} count={50} />
      <div style={{ marginBottom: "5em" }}></div>
      <h5 style={{ fontSize: "2em", marginBottom: "2em" }}>More Artists</h5>
      <ExtraArtists data={data} />
    </div>
  ) : (
    <Loading />
  );
};

export default withRouter(Artifact);
