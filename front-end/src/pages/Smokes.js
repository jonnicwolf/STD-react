import React from 'react'
import { Link } from 'react-router-dom'

//useeffect the axios call to back end ?
const Smokes = (items) => {
  return (
    <div>
      <ul class="smokes-container">
      {items.map((item,idx) => (
                <li className='smokes-child' key={idx}>
                  <Link to='/'>
                    <img className='smokes-item' src={item.image} alt=""/>
                    <p>{item.item}</p>                  
                  </Link>
                </li>
            ))}
      </ul>
    </div>
  )
}

export default Smokes;