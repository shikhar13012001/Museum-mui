import React from "react";
import SearchedItem from "../components/SearchedItem";
import { Context } from "../Context/AuthContext";
import { Container, Chip, Box, Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import server from "../utils/server";
import LinearProgress from "@mui/material/LinearProgress";

import { withRouter } from "react-router-dom";
const Profile = (props) => {
  const [context, setContext] = React.useContext(Context);
  const handleLogout = async () => {
    const res = await fetch(`${server}/logout`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setContext(null);
    localStorage.removeItem("isAuthenticated");
    props.history.push("/login");
  };
  const [posts, setPosts] = React.useState([]);
  const [photo, setPhoto] = React.useState(null);
  console.log(context?.user?.profileImg);
  const userName = context?.user?.name || "Jan DOe";
  const onFileChange = async (e) => {
    setPhoto(null);
    const formData = new FormData();
    formData.append("profileImg", e.target.files[0]);
    const res = await fetch(`${server}/userimg`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    e.target.value = null;
    const arr = await res.json();
    setContext(arr);
    setPhoto(arr.user.profileImg);
  };
  const FetchList = async () => {
    const arrTemp = [];
    for (let i = 0; i < context?.user?.liked.length; i++) {
      const res = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${context?.user?.liked[i]}`
      );
      const data = await res.json();
      arrTemp.push(data);
    }

    setPosts(arrTemp);
  };
  React.useEffect(() => {
    FetchList();
    setPhoto(context?.user?.profileImg);
  }, [context?.user]);
  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {photo ? (
        <img
          src={photo}
          alt=""
          width="300px"
          height="auto"
          style={{ borderRadius: "20px" }}
        />
      ) : (
        <p
          style={{
            width: "80%",
            textAlign: "left",
            fontStyle: "italic",
            margin: "30px 0",
          }}
        >
          <LinearProgress />
        </p>
      )}
      <input type="file" onChange={onFileChange} style={{ margin: "30px" }} />
      <label class="custom-file-upload">
        <input type="file" onChange={onFileChange} />
        New Profile Image Upload
      </label>
      <Chip label={userName} sx={{ mt: 2 }} />
      <Box
        sx={{
          minWidth: "10em",
          fontSize: "2em",
          borderRadius: "10px",
          fontFamily: "'Allerta',cursive",
        }}
      >
        {context?.user?.email}
      </Box>
      <Button
        onClick={handleLogout}
        endIcon={<ExitToAppIcon />}
        variant="contained"
        sx={{
          mt: 2,
          color: "black",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </Button>
      <Container sx={{ width: "100%" }}>
        {posts.map((item, index) => (
          <SearchedItem item={item} key={index} />
        ))}
      </Container>
    </Container>
  );
};

export default withRouter(Profile);
