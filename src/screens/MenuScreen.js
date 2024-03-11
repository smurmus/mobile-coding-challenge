import React from 'react'
import { View, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons'

import MenuItem from '../components/MenuItem'
import { useShoppingCart } from '../providers/ShoppingContext'

/**
 * 
 * @callback onPressCallback
 * @param {typeof Pressable.onPress} onPress
 */


/**
 * Button that navigates to the Shopping Cart screen.
 * 
 * @param {{ onPress: onPressCallback }} props 
 * @returns JSX.Element
 */
export const CartButton = ({ onPress }) => (
  <Pressable
    style={{ paddingRight: 16 }}
    onPress={onPress}
  >
    {({ pressed }) => (
      <Ionicons
        name="cart"
        size={30}
        color={pressed ?  'darkslategrey' : 'black'}
      />
    )}
  </Pressable>
)

export default () => {
  const { cart } = useShoppingCart()

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      {Object.keys(cart).map(itemId => (
        <MenuItem key={itemId} itemId={itemId} />
      ))}
    </View>
  )
}
