import React from 'react'
import {Link} from 'react-router-dom'

import './Extras.css'

const Extras = ({items}) => {
  return (
    <div className='extras-master-container'>
        <ul className='extras-container'>
            {items.map((item,idx) => (
                <li className='extras-child' key={idx}>
                  <Link to='/extras'>
                    <img className='extras-item' src={item.item} alt=""/>
                    <p className='extras-info'>{item.info}</p>                  
                  </Link>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default Extras;

