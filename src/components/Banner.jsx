import React from 'react'
import Box from '@mui/material/Box';
import ART_IMG from "../assests/Artists_Banner.jpg"

const Banner = (props) => {
    return (
        <Box
        sx={{
            marginTop:"2em",
          width: "100%",
          height: props.show?250:0,
          backgroundImage: `url(${props.img || ART_IMG})`,
          backgroundSize:"cover",
          backgroundPositionY:'-200px',
          backgroundRepeat:'no-repeat',
          opacity: [1,1, 1],
           
        }}
      />

      
    )
}

export default Banner
