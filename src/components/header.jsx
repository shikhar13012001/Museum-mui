import React from "react";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";

const Home = (props) => {
  console.log("header", props.user);
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
        text: props.user ? <Chip avatar={<Avatar></Avatar>} label={props.user.name} /> : "Login",
        link: props.user ? "/profile" : "/login",
      },
    ],
    logo: {
      img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/contest_math_I-0QX1ql.png?width=160",
    },
    style: {
      barStyles: {
        background: "#0000",
        position: "absolute",
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
 
