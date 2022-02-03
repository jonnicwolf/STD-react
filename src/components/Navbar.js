import React, { Component } from "react";
import { Link } from "react-router-dom";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <Link to="/">
//           <img alt="logo"></img>
//         </Link>
//         <Link to="/tripsmiths">The Tripsmiths</Link>
//         <Link to="/brands">Brands</Link>
//         <Link to="/visuals">Our Dreamcatchers</Link>
//         <Link to="/faq">FAQ</Link>
//         <Link to="/contact-us">Contact</Link>
//       </div>
//     );
//   }
// };
const Navbar = ()=> {
  return (
    <nav>
      <ul>        
        <li>
          <Link to='/'>
            <img src="src/photo_assets/Ads-n-logos/full logo everything wide@300x.png"/>
          </Link>          
        </li>                  
        <li>
          <Link to='/brands'>
            Brands
          </Link>          
        </li>                  
        <li>
          <Link to='/boricana'>
            Boricana
          </Link>          
        </li>                  
        <li>
          <Link to='/sustainability'>
            Sustainability
          </Link>          
        </li>                  
        <li>
          <Link to='/company'>
            Company
          </Link>          
        </li>           
        <li>
          <Link to='/careers'>
            Careers
          </Link>          
        </li>           
               
      </ul>
    </nav>
  )
}

export default Navbar;
