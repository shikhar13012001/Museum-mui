import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
export default function ActionAreaCard({ item, index }) {
  return (
    <div
      style={{ margin: "10px", verticalAlign: "center", textAlign: "center" }}
    >
      <Link to={`/artwork/${index}`}>
        <img src={item.image} width="200px" height="300px" className="zoom" alt=""/>
        <h2>{item.Artist}</h2>
        <h4>{item.Date}</h4>
      </Link>
    </div>
  );
}
