import React, { createContext, useState} from "react";
import all_product  from '../Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = ({ children }) => {

   const [cartItem, setCartItem] = useState(getDefaultCart())

   const addToCart = (itemId) => {
    setCartItem(prev => {
        return {
            ...prev,
            [itemId]: prev[itemId] + 1
        }
    })
   }

   const removeFromCart = (itemId) => {
    setCartItem(prev => {
        return {
            ...prev,
            [itemId]: prev[itemId] - 1
        }
    })
   }

   const getTotalCartAmount = () => {
    let totalAmount = 0
   for(const item in cartItem){
    if(cartItem[item] > 0) {
        let itemInfo = all_product.find(product => product.id===Number(item))
        totalAmount += itemInfo.new_price * cartItem[item]
    }
   }
   return totalAmount
   }

   const getTotalCartNumberOfItems = () => {
    let total = 0
    for(const item in cartItem) {
        total += cartItem[item]
    }
    return total
   }
   
   console.log(getTotalCartNumberOfItems())

    return (
        // the value of the context.provider has to be an object. because we are about to map throw it in shopCategory component
        <ShopContext.Provider value={{ all_product, cartItem, addToCart, removeFromCart, getTotalCartAmount, getTotalCartNumberOfItems }}> 
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider