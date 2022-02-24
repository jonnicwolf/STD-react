import React from 'react';
import './LogoTray.css'

/*.##........#######...######....#######...######.
  .##.......##.....##.##....##..##.....##.##....##
  .##.......##.....##.##........##.....##.##......
  .##.......##.....##.##...####.##.....##..######.
  .##.......##.....##.##....##..##.....##.......##
  .##.......##.....##.##....##..##.....##.##....##
  .########..#######...######....#######...######.*/
import StonedColdDreamery from '../photo_assets/Logos/StonedColdDreamery.png';
import SCD_Cone from '../photo_assets/Logos/SCD_Cone.png';

const LogoTray=()=> {
    return (
            <ul className='logo-container'>
                <li>
                    <button className='logo-button'>
                        <img src={SCD_Cone} alt=""height='30' width='100'/>
                    </button>
                </li>

                <li>
                    <button className='logo-button'>
                            <img src={StonedColdDreamery} alt="" height='30' width='100'/>                            
                    </button>
                </li>                                
            </ul>
    )
};

export default LogoTray;