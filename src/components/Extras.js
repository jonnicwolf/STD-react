import React from 'react'

import './Extras.css'

const Extras = ({items}) => {
  return (
    <div className='extras-master-container'>
        <ul className='extras-container'>
            {items.map((item,idx) => (
                <li className='extras-child' key={idx}>
                    <img className='extras-item' src={item.item} alt=""/>
                    <p>{item.info}</p>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default Extras;

