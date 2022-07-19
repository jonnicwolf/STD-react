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
          <ul id='products-ourBrands'>
            <li className='topnav-child'>
              <Link to='/products' className='topnav-child-button'>
                Products
              </Link>
            </li>        
            <li className='topnav-child'>            
              <Link to='/brands' className='topnav-child-button'>
                Our Brands
              </Link>          
            </li>
          </ul>
        </li>

        <li className='topnav-child-logotray'>            
          <LogoTray />
        </li>

        <li className='topnav-child'>
          <ul id='boricanna-account-cart'>
            <li>            
              <Link to='/boricanna' className='topnav-child-button'>
                Boricanna
              </Link>          
            </li>
            <li>            
              <Link to='/account' className='topnav-child-button'>
                Account
              </Link>          
            </li>                        
            <li>            
              <Link to='/cart' className='topnav-child-button'>
                🛒
              </Link>          
            </li>
          </ul>
        </li>

      </ul>       
    </nav>
  )
};

export default TopNavBar;
