import { Link } from "react-router-dom";
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
export default function ActionAreaCard({ item, index }) {
  
  return (
    <div style={{margin:"10px",verticalAlign:"center", textAlign:"center"}}>
     <Link to={`/artwork/${index}`}>
    <img src={item.image} width="200px" height="300px"  className="zoom"/>
    <h2>{item.Artist}</h2>
    <h4>{item.Date}</h4>
 </Link>
    </div>
  );
}
{/* <div className="card-art section">
      <Link to={`/artwork/${index}`}>
        <div
          className="card-image"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="card-description">{item.Artist}</div>
        
      </Link>
    </div> */}


    // <div className="section">
    // <Container sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
    //  <div className="image" >
    //  <img src={item.image} width={"350px"} height="auto" style={{marginTop:"30px"}}alt=""/>
    //  </div>
    //  <div className="description">
    //  <h2> {item.Artist}</h2>
    //  <h4> {item.Date}</h4>
    //  <p style={{marginTop:"30px",marginBottom:"10px",width:"80%"}}>{item.Desc}</p>
    //  </div>
    //  <Link to={`/artwork/${index}`}>
    //  <Button variant="contained" sx={{backgroundColor:"purple"}}>
    //  View Artist
    //  </Button>
    //  </Link>
    // </Container>
    // </div>