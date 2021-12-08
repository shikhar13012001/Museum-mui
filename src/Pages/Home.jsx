import React from "react";
import Main from "../components/Main";
import HighLights from "../components/CollectionHighlight"
import Container from "@mui/material/Container"
import History from "../components/History"
import CardComponent from "../components/CardComponent"
import Video from "../components/VIdeo" 
import Events  from "../components/Events"
const url="https://cdn.dribbble.com/users/4540442/screenshots/15091846/media/628fb207ab15916ecfa06e728b1e6b2c.png?compress=1&resize=1200x900";
const Home = () => {
  return (
    <>
    <div className="container" style={{marginBottom:"5em"}}>
      
      <Main />
 
     <Container sx={{width:"100%",height:"fit-content"}}> 
<Video/>
</Container>
      <div style={{height:"7em"}}></div>
<h1 style={{fontSize:"3em",marginBottom:20,textAlign:"center" }}> View the HighLights</h1>
      <HighLights />
      
      <History/> 
      <h1 style={{fontSize:"3em",marginTop:50,textAlign:"center" }}>Events this Wednesday</h1>
      <div style={{width:"80vw",height:"500px",overflowX:'auto',display:'flex'}}>
      <Events />
      <Events title={'ETHEL and Friends: Balcony Bar from Home'} image={'https://www.metmuseum.org/-/media/images/events/ongoing-programs/metspeaks/free-lectures/fy22/spain---camel---teaser.jpg?sc_lang=en'}/>
      <Events title={'ETHEL and Friends: Balcony Bar from Home'} image={'https://www.metmuseum.org/-/media/images/events/ongoing-programs/metlivearts/2015-16-event-images/programs_metlivearts_ethel_teaser.jpg?sc_lang=en'}/>
      </div>
      <CardComponent />
    </div> 
 
    </>
  );
};

export default Home;
