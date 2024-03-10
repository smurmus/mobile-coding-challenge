import React from 'react'
import { StyleSheet, View, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons'

import MenuItem from '../components/MenuItem'
import { menuItems } from '../data/menu'

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
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          name={item.name}
          price={item.price}
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