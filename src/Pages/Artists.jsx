import React from "react";
import Banner from "../components/Banner";
import Container from "@mui/material/Container";
import data from "../Artist.config.data";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory, Link } from "react-router-dom";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";
import "../Flickity.css";
import Masonry from "react-masonry-css";
import ArtistHighlight from "../components/CollectionHighlight";
const style = {
  wrapper: {
    // height: "20em",
    // width: "15em",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginBottom: 5,
  },
};
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
const Artists = (props) => {
  const [SearchedArtist, setSearchData] = React.useState("");
  const [AllArtist, setAllArtist] = React.useState(data);
  const History = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(SearchedArtist);
    setAllArtist(
      data.filter((item) =>
        SearchedArtist.length > 0
          ? item.Artist.includes(SearchedArtist.toUpperCase())
          : true
      )
    );
    console.log(
      data.filter((item) =>
        SearchedArtist.length > 0
          ? item.Artist.includes(SearchedArtist.toUpperCase())
          : true
      )
    );
  };
  const NewArtist = ({ item, index }) => (
    <div
      style={{
        ...style.wrapper,
        backgroundImage: `url(${item.image})`,
        height: Math.max(Math.random() * 500, 300),
        width: 270,
      }}
     
    >
      <div style={{ position: "absolute", bottom: 0 }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            color: "black",
            backgroundColor: "white",
            fontSize: 70,
            textAlign: "center",
            fontFamily: '"Bebas Neue", cursive',
          }}
        >
          {index + 1}
        </div>
        <h1 style={{ fontFamily: '"Bebas Neue", cursive', color: "white" }} >
          {item.Artist}
        </h1>
      </div>
    </div>
  );
  const options = {
    wrapAround: true,
    freeScroll: true,
    initialIndex: 2,
  };
  const u =
    "https://c4.wallpaperflare.com/wallpaper/743/193/102/vincent-van-gogh-painting-the-starry-night-classic-art-wallpaper-preview.jpg";
  return (
    <>
      <Banner img={u} show={props.show || false} />
      <h2 style={{ textAlign: "center" }}>Artworks of the day</h2>
      <ArtistHighlight query={"vermeer"} />
      <h1 style={{ textAlign: "center" }}>The Artists</h1>

      <Container
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
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
            height: "3em",
            mb: 3,
            mt: 3,
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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {AllArtist.map((item, index) => (
            <Link to={`/artwork/${index}`} >
              <NewArtist
                item={item}
                index={index}
              
              />
            </Link>
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default Artists;
