import React from 'react'
import {Link} from 'react-router-dom'

//useeffect the axios call to back end ?
const Swag = (items) => {
  return (
    <div>
        Swag
        <ul class="swag-container">
        {items.map((item,idx) => (
            <li className='swag-child' key={idx}>
                <Link to='/swag'>
                    <img className='swag-item' src={item.image} alt=""/>
                    <p>{item.item}</p>                  
                </Link>
            </li>
        ))}
        </ul>        
    </div>
  )
};

export default Swag;