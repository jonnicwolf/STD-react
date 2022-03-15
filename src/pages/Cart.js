import React from 'react'
import CartComp from '../components/CartComp'

const items = ['joint','bong','blunt','skunt']
const Cart = () => {

  return (
    <div>
        <h1>Shopping Cart</h1>
        <CartComp items={items}/>
        {/* add subtotal */}
        <button>Checkout</button>
    </div>
  )
}

export default Cart;