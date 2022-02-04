import React from 'react';
import { Link } from "react-router-dom";

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
};

export default Navbar;
