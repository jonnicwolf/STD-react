import React from 'react'
import CartComp from '../components/CartComp'

// const items = ['joint','bong','blunt','skunt']
const items = [
  {
    itemName: 'joint',
    inStock: true,
    inventory: 100_000,
    itemStrain: 'Blue Dream',
    itemSize: 'King',
    price: 5
  },
  {
    itemName: 'bong',
    inStock: false,
    inventory: 100_000,    
    itemSize: 'Large',
    price: 120
  },
  {
    itemName: 'blunt',
    inStock: true,
    inventory: 100_000,
    itemStrain: 'Biscotti',
    itemSize: 'King',
    price: 12
  },
  {
    itemName: 'grinder',
    inStock: true,
    inventory: 100_000,    
    itemSize: 'Jack',
    price: 20
  }
]
const Cart = () => {
  let subTotal = (items)=>items.reduce((subTotal, item)=>subTotal+item.price,0)
  
  return (
    <div>
        <h1>Shopping Cart</h1>
        <CartComp items={items}/>
        {/* add subtotal */}
        <div>${subTotal(items)}.00</div>
        <button>Checkout</button>
    </div>
  )
}

export default Cart;