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
        <div>
            <ul className='logo-container'>
                <li>
                    <div className='logo-cloudBackground'>
                        <div class="cloud large cloud-1">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud normal cloud-2">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud small cloud-3">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud tiny cloud-4">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud large cloud-5">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud normal cloud-6">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud small cloud-7">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud tiny cloud-8">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud small cloud-9">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud normal cloud-10">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud tiny cloud-11">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div class="cloud small cloud-12">
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                </li> 

                <li>
                    <ul className='logo-cone-name'>
                        <li className='logo-child'>
                            <Link to='/' className='logo-Link'>
                                    <img className='logo-img-name' src={SCD_name} alt=""/>                            
                            </Link>
                        </li>     

                        <li className='logo-child'>
                            <Link to='/'className='logo-Link'>
                                <img src={SCD_Cone} alt="" className='logo-img' id='logo-img-cone'/>
                            </Link>
                        </li>                      
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default LogoTray;