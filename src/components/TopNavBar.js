import React from 'react';
import { Link } from "react-router-dom";
import  LogoTray  from './LogoTray.js';

// import styled from "styled-components";
// const Logos = styled.div`
//   list-style: none;
//   display: flexbox;  
//   // flex-flow: row wrap;  
//   // justify-content: flex-start;
// `;

const TopNavBar = ()=> {
  return (
    <nav>
      {/* <Logos> */}
        <div>

        <ul>                
          <li>
            {/* <Link to='/'>
              <img 
                src="src/photo_assets/Ads-n-logos/full logo everything wide@300x.png"
                alt='scd-logo'/>
            </Link>           */}
            
            <LogoTray />
            

          </li>                  
          <li>
            <Link to='/boricanna'>
              Boricanna
            </Link>          
          </li>                  
          <li>
            <Link to='/brands'>
              Brands
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
      </div>
      {/* </Logos>       */}
    </nav>
  )
};

export default TopNavBar;
