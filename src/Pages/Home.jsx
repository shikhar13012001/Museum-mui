import React, {useEffect} from "react";
import Main from "../components/Main";
import HighLights from "../components/CollectionHighlight"
import Container from "@mui/material/Container"
import History from "../components/History"
import CardComponent from "../components/CardComponent"
import Video from "../components/VIdeo" 
import Events  from "../components/Events"
import AOS from "aos"
import "aos/dist/aos.css"


const Home = () => {
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
  })
  return (
    <>
    <div className="container" style={{marginBottom:"5em"}}>
      
      <Main data-aos="fade-up" />
 
     <Container sx={{width:"100%",height:"fit-content"}}> 
<Video/>
</Container>
      <div style={{height:"7em"}}></div>
<h1 style={{fontSize:"3em",marginBottom:20,textAlign:"center" }}> View the HighLights</h1>
      <HighLights />
      
      <History/> 
      <h1 style={{fontSize:"3em",marginTop:50,textAlign:"center" }}>Events this Wednesday</h1>
      <div data-aos="fade-right" style={{width:"80vw",height:"500px",overflowX:'auto',display:'flex'}}>
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
