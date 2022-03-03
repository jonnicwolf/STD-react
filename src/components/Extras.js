import React from 'react'
import mockup4 from '../photo_assets/Flavours/mockup4.jpg';
import mockup5 from '../photo_assets/Flavours/mockup5.jpg';
import mockup6 from '../photo_assets/Flavours/mockup6.jpg';

const Extras = ({items}) => {
  return (
    <div className='extras-master-container'>
        <ul className='extras-container'>
            {items.map((item) => (
                <li className='extras-child' key={'foo'}>
                    <img src={item.item} alt=""/>
                    <p>{item.info}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Extras

