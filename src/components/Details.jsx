import React from "react";
import Server from "../utils/server";
import Stack from "@mui/material/Stack";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import LinkIcon from "@mui/icons-material/Link";
import Chip from "@mui/material/Chip";
import { Context } from "../Context/AuthContext";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { withRouter } from "react-router-dom";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

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
const Details = (props) => {
  const [copied, setCopied] = React.useState(null);
  const { artifact } = props;
  const [Likes, setLikes] = React.useState(0);
  const [context, setContext] = React.useContext(Context);
  const [isBookmarked, setBookmarked] = React.useState(
    context?.user?.liked?.includes(artifact.objectID.toString()) || false
  );

  const handleLike = async () => {
    if (context.user) {
      setLikes(Likes + 1);
      try {
        const Like = await fetch(`${Server}/postlike/${artifact.objectID}`, {
          method: "GET",
          credentials: "include",
        });
        // eslint-disable-next-line
        // eslint-disable-next-line
        const res = await Like.json();
      } catch (e) {}
    } else {
      props.history.push("/login");
    }
  };
  React.useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, [artifact.objectID]);
  const FetchData = async () => {
    const res = await fetch(`${Server}/product/${artifact.objectID}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    setLikes(data.likes);
    setBookmarked(
      context?.user?.liked?.includes(artifact.objectID.toString()) || false
    );
  };
  const handleAddtoBookmark = async () => {
    if (context.user) {
      setBookmarked(true);
      try {
        const res = await fetch(`${Server}/saveart/${artifact.objectID}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
      } catch (e) {}
    } else {
      props.history.push("/login");
    }
  };
  return (
    <div className="details">
      <Typography sx={{ fontSize: 20 }}>
        <strong style={{ fontWeight: "bold" }}>Title: </strong>
        {artifact.title}
      </Typography>
      <Typography sx={{ fontSize: 20 }}>
        <strong style={{ fontWeight: "bold" }}>Date: </strong>
        {`${artifact.objectBeginDate}-${artifact.objectEndDate}`}
      </Typography>
      <Typography sx={{ fontSize: 20 }}>
        <strong style={{ fontWeight: "bold" }}>Author: </strong>
        {artifact.artistDisplayName}
      </Typography>
      <Typography sx={{ fontSize: 20 }}>
        <strong style={{ fontWeight: "bold" }}>Medium: </strong>
        {artifact.medium}
      </Typography>
      <Typography sx={{ fontSize: 20 }}>
        <strong style={{ fontWeight: "bold" }}>Dimensions: </strong>
        {artifact.dimensions}
      </Typography>
      <Typography sx={{ fontSize: 20 }}>
        <strong style={{ fontWeight: "bold" }}>Muesuem: </strong>
        {artifact.repository}
      </Typography>
      <Typography sx={{ fontSize: 20 }}>
        <strong style={{ fontWeight: "bold" }}>Classification: </strong>
        {artifact.classification}
      </Typography>
      <Collapse in={copied}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setCopied(!copied);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          URL copied
        </Alert>
      </Collapse>
      <Stack direction="row" spacing={5} sx={{ mt: 3 }}>
        <Chip
          avatar={
            <ThumbUpIcon
              onClick={handleLike}
              sx={{
                fill: "#4d4b5c",
                cursor: "pointer",
                width: "40px",
                height: "40px",
              }}
            />
          }
          label={Likes}
        />
        {isBookmarked ? (
          <BookmarkAddedIcon
            sx={{
              fill: "#4d4b5c",
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
          />
        ) : (
          <BookmarkAddIcon
            onClick={handleAddtoBookmark}
            sx={{
              fill: "#4d4b5c",
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
          />
        )}
        <LinkIcon
          sx={{
            fill: "#004eba",
            cursor: "pointer",
            width: "40px",
            height: "40px",
          }}
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText(
              `https://sonofogrelouvre.netlify.app/artifact/${artifact.objectID}`
            );
          }}
        />
      </Stack>
      <Line />
    </div>
  );
};

export default withRouter(Details);
