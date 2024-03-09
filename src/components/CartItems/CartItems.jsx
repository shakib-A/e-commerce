import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../Assets/cart_cross_icon.png'

const CartItems = () => {

  const { all_product, cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

  return (
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((item,i) => {
          if(cartItem[item.id] > 0) {
            return  <div key={i} className="cartItems-format cartItems-format-main">
            <img src={item.image} alt="" className='carticon-product-icon'/>
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button className='cartItems-quantity'>{cartItem[item.id]}</button>
            <p>{item.new_price*cartItem[item.id]}</p>
            <img onClick={() => removeFromCart(item.id)} src={remove_icon} alt="" className='cartitems-remove-icon' />
          </div>
          }
          return null
        })}
        <div className="cartItems-down">
          <div className="cartItems-total">
            <h1>Totals</h1>
            <div>
              <div className="cartItems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartItems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartItems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <div className="cartItems-promocod">
              <p>If you have a promo code enter it here</p>
              <div className="cartItems-promobox">
                <input type="text" placeholder="promo code" id="" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems