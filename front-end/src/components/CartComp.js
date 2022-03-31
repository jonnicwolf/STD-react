import React from 'react'

const CartComp = ({items}) => {
  return (
    <div>
        <ul>
            {items.map((item, idx)=>
                <li class="cart-item">
                    <h3 class="cart-item-name">item name</h3>
                    <p class="cart-item-inStock">in stock?</p>
                    <ul class="cart-item-quantityGroup">
                        <li class="cart-item-quantityGroup-dropdown">
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </li>
                        <li class="cart-item-quantityGroup-deleter">
                            <button>Delete</button>
                        </li>
                    </ul>
                    <p class="cart-item-strain">Item strain</p>
                    <p class="cart-item-size">item size</p>
                    <h2 class="cart-item-price">item price</h2>
                </li>  
            )}    
        </ul>
    </div>
  )
}

export default CartComp;