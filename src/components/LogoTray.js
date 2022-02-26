import React from 'react';
import { Link } from 'react-router-dom';
import './LogoTray.css'

/*.##........#######...######....#######...######.
  .##.......##.....##.##....##..##.....##.##....##
  .##.......##.....##.##........##.....##.##......
  .##.......##.....##.##...####.##.....##..######.
  .##.......##.....##.##....##..##.....##.......##
  .##.......##.....##.##....##..##.....##.##....##
  .########..#######...######....#######...######.*/
import SCD_name from '../photo_assets/Logos/SCD_name.png';
import SCD_Cone from '../photo_assets/Logos/SCD_Cone.png';

const LogoTray=()=> {
    return (
        <ul className='logo-container'>
            <li>
                <Link to='/'className='logo-Link'>
                    <img src={SCD_Cone} alt="" className='logo-img' className='logo-img-cone'/>
                </Link>
            </li>

            <li>
                <Link to='/' className='logo-Link'>
                        <img className='logo-img' className='logo-img-name' src={SCD_name} alt=""/>                            
                </Link>
            </li>                                
        </ul>
    )
};

export default LogoTray;