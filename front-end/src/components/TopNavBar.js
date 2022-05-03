import React from 'react';
import { Link } from "react-router-dom";

/*
..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
.##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
.##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
.##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
.##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
.##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
*/
import  LogoTray  from './LogoTray.js';

/*
..######..########.##....##.##.......########..######.
.##....##....##.....##..##..##.......##.......##....##
.##..........##......####...##.......##.......##......
..######.....##.......##....##.......######....######.
.......##....##.......##....##.......##.............##
.##....##....##.......##....##.......##.......##....##
..######.....##.......##....########.########..######.
*/
import './TopNavBar.css';


const TopNavBar = ()=> {
  return (
    <nav className='topnav-masterContainer'>            
      <ul className='topnav-container'>                
        <li className='topnav-child'>
          <Link to='/products' className='topnav-child-button'>
            Products
          </Link>
        </li>        
        <li className='topnav-child'>            
          <Link to='/brands' className='topnav-child-button'>
            Brands
          </Link>          
        </li>
        <li className='topnav-child-logotray'>            
          <LogoTray />
        </li>
        <li className='topnav-child'>            
          <Link to='/boricanna' className='topnav-child-button'>
            Boricanna
          </Link>          
        </li>

          {/* <li className='topnav-child'>            
            <Link to='/sustainability' className='topnav-child-button'>
              Sustainability
            </Link>          
          </li> */}
          {/* <li className='topnav-child'>            
            <Link to='/company' className='topnav-child-button'>
              Company
            </Link>          
          </li> */}

        <li className='topnav-child'>            
          <Link to='/careers' className='topnav-child-button'>
            Careers
          </Link>          
        </li>                        
        <li className='topnav-child'>            
          <Link to='/cart' className='topnav-child-button'>
            🛒
          </Link>          
        </li>                        
      </ul>       
    </nav>
  )
};

export default TopNavBar;
