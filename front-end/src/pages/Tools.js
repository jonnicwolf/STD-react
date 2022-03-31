import React from 'react'
import { Link } from 'react-router-dom'

//useeffect the axios call to back end ?
const Tools = (items) => {
  return (
    <div>
        Tools
        <ul class="tools-container">
        {items.map((item,idx) => (
                <li className='tools-child' key={idx}>
                  <Link to='/tools'>
                    <img className='tools-item' src={item.image} alt=""/>
                    <p>{item.item}</p>                  
                  </Link>
                </li>
            ))}
        </ul>
    </div>
  )
};

export default Tools;