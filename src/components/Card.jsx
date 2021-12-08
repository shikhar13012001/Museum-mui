import React from 'react'
import "../Card.css"
import LOGO from "../assests/Logo.png"
import STATUE from "../assests/statue.jpg"
const Card = () => {
    const handleHover=()=>{
        const ticketElm = document.getElementById('ticket');
      const { x, y, width, height } = ticketElm.getBoundingClientRect();
      const centerPoint = { x: x + width / 2, y: y + height / 2 };

      ticketElm.addEventListener('mousemove', (e) => {
        const degreeX = (e.clientY - centerPoint.y) * 0.008;
        const degreeY = (e.clientX - centerPoint.x) * -0.008;

        ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
      });
      
    }
    return (
  
        <div className="ticket-visual_visual" id="ticket" style={{marginTop:0,marginBottom:"4em" }}onMouseEnter={handleHover}>
 <img src={STATUE} width="100%" height="auto"/>
    </div>
    
    )
}

export default Card
