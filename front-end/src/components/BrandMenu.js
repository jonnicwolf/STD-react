import React from 'react';
import { Link } from 'react-router-dom';

import './BrandMenu.css';
//on hover change buttons to change background and show literature

import Dosist from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Dosist.png';
import Houseplant from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Houseplant.png';
import Kurvana from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Kurvana.png';
import LeafsBySnoop from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/LeafsBySnoop.png';
import Level from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Level.png';
import LowellFarms from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/LowellFarms.png';
import MarleyNatural from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/LowellFarms.png';
import Monogram from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Monogram.png';
import WillysReserve from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/WillysReserve.png';

const BrandMenu = () => {
  return (
    <div>
        <ul className="brand-menu-container">  
            <li>
                <Link 
                    to='/boricanna'
                    className="brand-menu-button">
                    <img src="" alt='Boricanna'/>
                </Link>
            </li>

            <li>
                <Link 
                    to={{pathname: 'https://dosist.com/'}}
                    className="brand-menu-button">
                    <img src={Dosist}/>                    
                </Link>
            </li>

            <li>
                <Link
                    to={{pathname: 'https://kurvana.com/'}}
                   
                    className="brand-menu-button">
                    <img src={Kurvana} alt="Kurvana"/>
                </Link>
            </li>

            <li>
                <Link 
                    to= {{pathname: 'https://www.houseplant.com/'}}
                    className="brand-menu-button">
                    <img src={Houseplant} alt="Houseplant"/>
                </Link>
            </li>

            

            <li>
                <Link 
                    to={{pathname: 'https://levelexperience.com/'}}
                    className="brand-menu-button">
                    <img src={Level} alt='Level'/>
                </Link>
            </li>

            <li>
                <Link
                    to={{pathname: 'https://www.lowellfarms.com/cannabis'}}
                    className="brand-menu-button">
                    <img src={LowellFarms} alt="Lowell Farms"/>
                </Link>
            </li>

            <li>
                <Link 
                    to={{pathname: 'https://www.marleynatural.com/'}}
                    className="brand-menu-button">
                    <img src={MarleyNatural} alt="Marley Natural"/>
                </Link>
            </li>

            <li>
                <Link 
                    to={{pathname: 'https://www.monogramcompany.com/'}}
                    className="brand-menu-button">
                    <img src={Monogram} alt="Monogram"/>
                </Link>
            </li>

            <li>
                <Link 
                    to={{pathname: 'https://williesreserve.com/'}}
                    className="brand-menu-button">
                    <img src={WillysReserve} alt="Willy's Reserve"/>
                </Link>
            </li>
        </ul>            
    </div>
  )
};


export default BrandMenu;