import React from 'react'
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Details from "./Details"
import { Link } from "react-router-dom"


const SearchItem= (props)=>{
const { item }= props;

return (
<Grid container columns={16} sx={{border:"3px solid black",borderRadius:"20px",marginBottom:5,marginTop:5}} spacing={1}>
<Grid item xs={16} sm={16} md={3} lg={3} sx={{height:240,display:"grid",placeContent:"center",position:"relative"}}>
<Link to={`/artifact/${item.objectID}`}>
<img src={item.primaryImage} width="100%" height="200" alt="" />
</Link>
</Grid>
<Grid item md={12} sm={16} xs={16} lg={13}  sx={{textAlign:'center',position:"relative"}}>
<h1> {item.title} </h1>
<h3 style={{fontSize:"20px"}}>{item.artistDisplayName}</h3>
<h3 style={{fontSize:"20px"}}>{item.objectBeginDate+`-`+item.objectEndDate}</h3>
<Container sx={{width:"100%"}}>
<Details artifact={item} />
</Container>
</Grid>
</Grid>
)
}


export default SearchItem