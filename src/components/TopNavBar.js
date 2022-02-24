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
      
        <ul>                
          <li>
            {/* LogoTray -> SCD-Initials * SCD-Logo * Stoned Cold Dreamery */}
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
      
    </nav>
  )
};

export default TopNavBar;
