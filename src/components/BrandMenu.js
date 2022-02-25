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
                    <div>Boricanna</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/brands'
                    className="brand-menu-button">
                    <div>Marley Natural</div>
                </Link>
            </li>

            <li>
                <Link
                    to='/brands'
                    className="brand-menu-button">
                    <div>HousePlant</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/brands'
                    className="brand-menu-button">
                    <div>Dosist</div>
                </Link>
            </li>

            <li>
                <Link
                    to='/brands'
                    className="brand-menu-button">
                    <div>Kurvana</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/brands'
                    className="brand-menu-button">
                    <div>Leafs By Snoop</div>
                </Link>
            </li>

            <li>
                <Link
                    to='/'
                    className="brand-menu-button">
                    <div>Level</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/'
                    className="brand-menu-button">
                    <div>Lowell Farms</div>
                </Link>
            </li>

            <li>
                <Link 
                    to='/'
                    className="brand-menu-button">
                    <div>Willy's Reverse</div>
                </Link>
            </li>
        </ul>            
    </div>
  )
};

export default BrandMenu;