import React, { createContext, useContext, useReducer } from 'react'

import { menuItems } from '../data/menu'

/**
 * @typedef CartItem
 * @type {object}
 * @property {string} name - menu item name that appears in list
 * @property {number} price - price of (1) count of this item
 * @property {number} quantity - total count of this item in the cart
 * 
 */

const ShoppingCartContext = createContext(null)

const ShoppingCartDispatchContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(
    shoppingCartReducer,
    { cart: initialShoppingCart, total: 0 }
  )

  return (
    <ShoppingCartContext.Provider value={cart}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => useContext(ShoppingCartContext)

export const useShoppingCartDispatch = () => useContext(ShoppingCartDispatchContext)

/**
 * @typedef CartState
 * @type {{ cart: CartItem, total: number }}
 * @param {CartState} cart - The items that a user has in the shopping cart
 * @param {{ id: string, type: 'add'|'remove' }} dispatch - Item ID and the type of update
 * @returns {CartState}
 */
const shoppingCartReducer = ({ cart, total }, dispatch) => {
  const currentQuantity = cart[dispatch.id].quantity

  switch (dispatch.type) {
  case 'add': {
    return {
      cart: {
        ...cart,
        [dispatch.id]: {
          ...cart[dispatch.id],
          quantity: currentQuantity + 1,
        },
      },
      total: total + cart[dispatch.id].price,
    }
  }
  case 'remove': {
    return {
      cart: {
        ...cart,
        [dispatch.id]: {
          ...cart[dispatch.id],
          quantity: currentQuantity - 1,
        },
      },
      total: total - cart[dispatch.id].price,
    }
  }
  default: {
    throw Error('Unknown action: ' + action.type)
  }
  }
}

/**
 * @type {Object.<string, CartItem>} - Transform menu data to mapping to track
 * totals in the cart, returns object where key is an item's ID.
 */
const initialShoppingCart = menuItems.reduce((prev, curr) => ({
  ...prev,
  [curr.id]: {
    name: curr.name,
    price: curr.price,
    quantity: 0,
  }
}), {})
