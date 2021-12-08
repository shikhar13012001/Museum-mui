import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const Home = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Artist',
        link: '/artists'
      },
      {
        text: 'Explore',
        link: '/collections'
      } 
    ],
    logo: {
      
     img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/contest_math_I-0QX1ql.png?width=160"
    },
    style: {
      barStyles: {
        background: '#0000',
        position:"absolute",
        zIndex:100,
    

        
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'black'
      }
    }
  }
  return <Navbar {...props} />
}
export default  Home


// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="header">
//       <ul className="navigation">
//         <Link to="/collections" >
//           {" "}
//           <li>Collection</li>
//         </Link>
//         <Link to="/artists">
//           {" "}
//           <li> Artists</li>
//         </Link>
//         <Link to="/">
//         <li>Home</li>
//         </Link>
//       </ul>
//     </div>
//   );
// };
// export default Header;
