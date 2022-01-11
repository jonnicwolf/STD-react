import React from 'react';
import {Link} from 'react-router-dom';

const Brands = () => {
    return (
        <div>
            <Link to='https://kurvana.com/'>
                <img src='src/assets/Kurvana.png' alt='kurvana'/>
            </Link>
            <Link to='https://levelexperience.com/' alt='level experience'>
                <img src='src/assets/Level.png'/>
            </Link>
            <Link to='https://www.monogramcompany.com/' alt='monogram'>
                <img src='src/assets/Monogram.png'/>
            </Link>
            <Link to='https://www.lowellfarms.com/cannabis' alt='lowell farms'>
                <img src='src/assets/Lowell Farms.png'/>
            </Link>
            <Link to='https://dosist.com/' alt='dosist'>
                <img src='src/assets/Dosist.png'/>
            </Link>
            <Link to='https://www.houseplant.com/' alt='houseplant'>
                <img src='src/assets/houseplant.png'/>
            </Link>            
            <Link to='https://williesreserve.com/' alt='willies reserve'>
                <img src='src/assets/Willys_Reserve.png'/>
            </Link>
            <Link to='https://www.marleynatural.com/' alt='marley natural'>
                <img src='src/assets/Marley Natural.png'/>
            </Link>
        </div>
    )
};

export default Brands;