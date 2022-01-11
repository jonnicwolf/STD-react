import React from 'react';
import {Link} from 'react-router-dom';

const Brands = () => {
    return (
        <div class=''>
            <Link to='https://kurvana.com/'>
                <i source='src/assets/Kurvana.png'/>
            </Link>
            <Link to='https://levelexperience.com/'>
                <i source='src/assets/Level.png'/>
            </Link>
            <Link to='https://www.monogramcompany.com/'>
                <i source='src/assets/Monogram.png'/>
            </Link>
            <Link to='https://www.lowellfarms.com/cannabis'>
                <i source='src/assets/Lowell Farms.png'/>
            </Link>
            <Link to='https://dosist.com/'>
                <i source='src/assets/Dosist.png'/>
            </Link>
            <Link to='https://www.houseplant.com/'>
                <i source='src/assets/houseplant.png'/>
            </Link>
            {/* <Link to='/'>
                <i source='src/assets/boricana.png'/>
            </Link> */}
            <Link to='https://williesreserve.com/'>
                <i source='src/assets/Willys_Reserve.png'/>
            </Link>
            <Link to='https://www.marleynatural.com/'>
                <i source='src/assets/Marley Natural.png'/>
            </Link>
            
            
            
        </div>
    )
};

export default Brands;