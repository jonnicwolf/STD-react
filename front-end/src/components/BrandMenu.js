import React from 'react';
import { Link } from 'react-router-dom';

import './BrandMenu.css';
//on hover change buttons to change background and show literature
import Boricanna_logo_gold_nw from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Boricanna/Insta photos/Boricanna_logo_gold_nw.jpg'
import Dosist from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Dosist.png';
import Houseplant from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Houseplant.png';
import Kurvana from '/Users/jonnarine/projects/SCD-react/front-end/src/photo_assets/Brands/Kurvana.png';
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
                    <img src={Boricanna_logo_gold_nw} alt='Boricanna'/>
                </Link>
            </li>

            <li>
                <a href="https://dosist.com/" className='brand-menu-button'>
                    <img src={Dosist}/>                    
                </a>
            </li>

            <li>
                <a href="https://kurvana.com/" className='brand-menu-button'>
                    <img src={Kurvana}/>                    
                </a>
            </li>

            <li>
                <a href="https://www.houseplant.com/" className='brand-menu-button'>
                    <img src={Houseplant} alt=""/>
                </a>
            </li>

            <li>
                <a href="https://levelexperience.com/" className='brand-menu-button'>
                    <img src={Level} alt=""/>
                </a>
            </li>

            <li>
                <a href="https://www.lowellfarms.com/cannabis" className='brand-menu-button'>
                    <img src={LowellFarms} alt=""/>
                </a>
            </li>

            <li>
                <a href="https:.//www.marleynatural.com/" className='brand-menu-button'>
                    <img src={MarleyNatural} alt=""/>
                </a>
            </li>

            <li>
                <a href="https://www.monogramcompany.com/" className='brand-menu-button'>
                    <img src={Monogram} alt=""/>
                </a>
            </li>

            <li>
                <a href="https://williesreserve.com/" className='brand-menu-button'>
                    <img src={WillysReserve} alt=""/>
                </a>
            </li>
        </ul>            
    </div>
  )
};


export default BrandMenu;