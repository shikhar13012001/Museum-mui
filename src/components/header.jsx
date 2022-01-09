import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { Context } from "../Context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import server from "../utils/server";
const Home = (props) => {
  const [context, setContext] = React.useContext(Context);
  const handleLogout = async () => {
    await fetch(`${server}/logout`, { method: "GET", credentials: "include" });
    setContext(null) 
    localStorage.removeItem("isAuthenticated");
  };

 
  const options = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Artist",
        link: "/artists",
      },
      {
        text: "Explore",
        link: "/collections",
      },
      {
        text: props.user ? (
          <Chip avatar={<Avatar src={context?.user?.profileImg}></Avatar>} label={props.user.name} />
        ) : (
          "Login"
        ),
        link: props.user ? "/profile" : "/login",
      },
      props.user
        ? {
            text: <LogoutIcon onClick={handleLogout} />,
            link: "",
          }
        : {
            text: "",
            link: "",
          },
    ],
    logo: {
      img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/contest_math_I-0QX1ql.png?width=160",
    },
    style: {
      barStyles: {
        background: "#0000",
        position: "relative",
        zIndex: 100,
      },
      sidebarStyles: {
        background: "#222",
        buttonColor: "black",
      },
    },
  };
  return <Navbar {...options} />;
};
export default Home;
