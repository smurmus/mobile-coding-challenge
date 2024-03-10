import React, { createContext, useContext, useReducer } from 'react'

import { menuItems } from '../data/menu'

/** @TODO update jsdoc types lol */

/**
 * @typedef CartItem
 * @type {object}
 * @property {string} id - menu item's ID
 * @property {string} name - menu item name that appears in list
 * @property {number} quantity - how many of this item are in the cart; can be 0
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
 * 
 * @param {Object.<string, CartItem>} cart - The items that a user has in the shopping cart
 * @param {{ id: string, type: 'add'|'remove' }} dispatch - Item ID and the type of update
 * @returns {Object.<string, CartItem}
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
    // throw an error maybe?
    return { cart, total }
  }
  }
}

/**
 * @type {Object.<string, CartItem>} - Transform menu data to mapping to track
 * totals in the cart. Quantities begin at 0 for all.
 */
const initialShoppingCart = menuItems.reduce((prev, curr) => ({
  ...prev,
  [curr.id]: {
    name: curr.name,
    price: curr.price,
    quantity: 0,
  }
}), {})
