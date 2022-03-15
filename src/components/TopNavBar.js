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
        <li className='topnav-child-logotray'>            
          <LogoTray />
        </li>
        <li className='topnav-child'>            
          <Link to='/boricanna' className='topnav-button'>
            Boricanna
          </Link>          
        </li>
        <li className='topnav-child'>            
          <Link to='/brands' className='topnav-button'>
            Brands
          </Link>          
        </li>
        <li className='topnav-child'>            
          <Link to='/sustainability' className='topnav-button'>
            Sustainability
          </Link>          
        </li>
        <li className='topnav-child'>            
          <Link to='/company' className='topnav-button'>
            Company
          </Link>          
        </li>
        <li className='topnav-child'>            
          <Link to='/careers' className='topnav-button'>
            Careers
          </Link>          
        </li>                        
        <li className='topnav-child'>            
          <Link to='/cart' className='topnav-button'>
            🛒
          </Link>          
        </li>                        
      </ul>       
    </nav>
  )
};

export default TopNavBar;
