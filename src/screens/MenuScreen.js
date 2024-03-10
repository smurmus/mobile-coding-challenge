import React from 'react'
import { StyleSheet, View, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons'

import MenuItem from '../components/MenuItem'
import { useShoppingCart } from '../providers/ShoppingContext'

export const CartButton = ({ onPress }) => (
  <Pressable
    style={({ pressed }) => [
      { backgroundColor: pressed ? 'deepskyblue' : 'white' },
      styles.cartButton,
    ]}
    onPress={onPress}
  >
    {({ pressed }) => (
      <Ionicons
        name="cart"
        size={24}
        color={pressed ? 'white' : 'deepskyblue'}
      />
    )}
  </Pressable>
)

export default () => {
  const cart = useShoppingCart()

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      {Object.keys(cart).map(itemId => (
        <MenuItem
          key={itemId}
          name={cart[itemId].name}
          price={cart[itemId].price}
        />
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  cartButton: {
    borderRadius: 60,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
})