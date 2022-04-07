import React from 'react';
import { Link } from 'react-router-dom';

import './BrandMenu.css';
//on hover change buttons to change background and show literature

const BrandMenu = () => {
  return (
    <div>
        <ul className="brand-menu-container">
            <li>
                <Link 
                    to='/boricanna'
                    className="brand-menu-button">
                    <img src="" alt="Boricanna"/>
                    <div>Boricanna</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/brands'
                    className="brand-menu-button">
                    <img src="front-end/src/photo_assets/Brands/Marley Natural.png" alt="Marley Natural"/>
                    <div>Marley Natural</div>
                </Link>
            </li>

            <li>
                <Link
                    to='/brands'
                    className="brand-menu-button">
                    <img src="front-end/src/photo_assets/Brands/houseplant.png" alt="Houseplant"/>
                    <div>HousePlant</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/brands'
                    className="brand-menu-button">
                    <img src="front-end/src/photo_assets/Brands/Dosist.png" alt="Dosist"/>
                    <div>Dosist</div>
                </Link>
            </li>

            <li>
                <Link
                    to='/brands'
                    className="brand-menu-button">
                    <img src="" alt=""/>
                    <div>Kurvana</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/brands'
                    className="brand-menu-button">
                    <img src="front-end/src/photo_assets/Brands/Kurvana.png" alt="Leafs By Snoop"/>
                    <div>Leafs By Snoop</div>
                </Link>
            </li>

            <li>
                <Link
                    to='/'
                    className="brand-menu-button">
                    <img src="front-end/src/photo_assets/Brands/Level.png" alt="Level"/>
                    <div>Level</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/'
                    className="brand-menu-button">
                    <img src="front-end/src/photo_assets/Brands/Lowell Farms.png" alt="Lowell Farms"/>
                    <div>Lowell Farms</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/'
                    className="brand-menu-button">
                    <img src="front-end/src/photo_assets/Brands/Willys_Reserve.png" alt="Willy's Reserve"/>
                    <div>Willy's Reverse</div>
                </Link>
            </li>
        </ul>            
    </div>
  )
};

export default BrandMenu;