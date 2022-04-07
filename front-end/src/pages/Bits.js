import React from 'react'
import {Link} from 'react-router-dom'

//useeffect the axios call to back end ?
const Bits = (items) => {
  return (
    <div>
        Bits
        <ul class="pieces-container">
            {items.map((item,idx) => (
                <li className='pieces-child' key={idx}>
                  <Link to='/bits'>
                    <img className='pieces-item' src={item.image} alt=""/>
                    <p>{item.item}</p>                  
                  </Link>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default Bits;