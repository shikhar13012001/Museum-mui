import React from 'react'
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button" 
const Events = (props) => {
    return (
        <>
<Grid container   sx={{width:"300px",height:"450px", margin:'15px',boxShadow: "4px 5px 5px 0px rgba(0,0,0,0.75)",borderRadius:"10px",position:"relative"}} >
<Grid item xs={16} sx={{height:200,width:"300px",position:'relative'}}>
<img src={props.image||'https://www.metmuseum.org/-/media/images/events/ongoing-programs/metstudies/metstudies_grad-undergrad-info-sessions-sept-teaser.jpg?sc_lang=en'}
width="100%" height="100%" style={{objectFit:"cover"}} alt=""/>

</Grid>
<Grid item xs={16} sx={{height:250,width:"300px"}}>
<p style={{fontWeight:"bold",fontFamily:"'Allerta',serif"}}>LOUVRELIVEARTS</p>
<h4 style={{fontFamily:"'Allerta',serif",marginTop:"20px"}}>
{props.title||'Matthew Evan Taylor:Postcards toThe Met'}
</h4>
<h5 style={{fontFamily:"'Allerta',serif",marginTop:"20px"}}>
3:30PM
</h5>
<h5 style={{fontFamily:"'Allerta',serif",marginTop:"10px"}}>
Online
</h5>
<div style={{textAlign:'center',marginTop:30}}>
<Button variant={"contained"} style={{backgroundImage:'linear-gradient(to right,#ce0058,#e4002b,#fe8800)'}}>
Join
</Button>
</div>
</Grid>

</Grid>

        
        </>
    )
}

export default Events
