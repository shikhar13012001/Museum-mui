import React from "react";
import Server from "../utils/server";
import Stack from "@mui/material/Stack";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import LinkIcon from "@mui/icons-material/Link";
import Chip from "@mui/material/Chip";
import { Context } from "../Context/AuthContext";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
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
const Details = ({ artifact }) => {
  const [Likes, setLikes] = React.useState(0);

  const [context, setContext] = React.useContext(Context);
  console.log("context",  (artifact.objectID.toString()));
  const [isBookmarked, setBookmarked] = React.useState(
    context.user.liked.includes((artifact.objectID.toString()))
  );

  const handleLike = async () => {
    try {
      const Like = await fetch(`${Server}/postlike/${artifact.objectID}`, {
        method: "GET",
        credentials: "include",
      });
      // eslint-disable-next-line
      setLikes(Likes + 1);

      const res = await Like.json();
    } catch (e) {}
  };
  React.useEffect(() => {
    FetchData();
  });
  const FetchData = async () => {
    const res = await fetch(`${Server}/product/${artifact.objectID}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setLikes(data.likes);
  };
  const handleAddtoBookmark = async () => {
    const res = await fetch(`${Server}/saveart/${artifact.objectID}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    setContext({ user: data });
    setBookmarked(true);
  };
  return (
    <div className="details">
      <span>
        <strong style={{ fontWeight: "bold" }}>Title: </strong>
        {artifact.title}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Date: </strong>
        {`${artifact.objectBeginDate}-${artifact.objectEndDate}`}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Author: </strong>
        {artifact.artistDisplayName}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Medium: </strong>
        {artifact.medium}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Dimensions: </strong>
        {artifact.dimensions}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Muesuem: </strong>
        {artifact.repository}
      </span>
      <span>
        <strong style={{ fontWeight: "bold" }}>Classification: </strong>
        {artifact.classification}
      </span>
      <Stack direction="row" spacing={5} sx={{ mt: 3 }}>
        <Chip
          avatar={
            <ThumbUpIcon
              onClick={handleLike}
              sx={{ fill: "#4d4b5c", cursor: "pointer" }}
            />
          }
          label={Likes}
        />
        {isBookmarked ? (
          <BookmarkAddedIcon sx={{ fill: "#4d4b5c", cursor: "pointer" }} />
        ) : (
          <BookmarkAddIcon
            onClick={handleAddtoBookmark}
            sx={{ fill: "#4d4b5c", cursor: "pointer" }}
          />
        )}
        <LinkIcon sx={{ fill: "#004eba", cursor: "pointer" }} />
      </Stack>
      <Line />
    </div>
  );
};

export default Details;
