import React from 'react'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import IMG from "../assests/Home (2).png"
const center ={
  display:'flex',
flexDirection:'column',
  alignItems:'center'
}
const Main = () => {
    return (
      <Container sx={{width:"100%",position:"relative",height:"100vh",marginTop:"4em"}}>
     <Grid container columns={16}  spacing={2}>
     <Grid item xs={3} sx={{minHeight:"100vh",position:"relative",textAlign:"center", display:"flex",justifyContent:"center",alignItems:"center"}}>
 <h1 style={{transform:"rotate(270deg)",fontSize:"64px",whiteSpace:"nowrap"}}> Louvre Meaux</h1>
     
     </Grid>
       <Grid item xs={13} sx={{height:"100vh" ,width:"100%",position:"relative",textAlign:"center",...center}}>
       <span style={{fontFamily:"Roboto mono"}}>Guided Tour 11:30 AM</span>
       {/* <div style={{width:"100%", height:"20px",display:"flex",justifyContent:"space-between"}}> */}
        {/* </div> */}
<div className="distortion" style={{position:'relative', width:"100%",height:"100%",maxWidth:"550px",}}>

</div>
       </Grid>
     </Grid>
      


      </Container>
       
    )
}

export default Main
