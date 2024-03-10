import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import UpdateItemButton from './UpdateItemCountButton'
import { useShoppingCart, useShoppingCartDispatch } from '../providers/ShoppingContext'

const CartItem = ({ itemId }) => {
  const { cart } = useShoppingCart()
  const dispatch = useShoppingCartDispatch()
  
  const { name, price, quantity } = cart[itemId]
  const subtotal = (price * quantity).toFixed(2)

  return (
    <View style={styles.content}>
      <View style={styles.left}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.price}>${subtotal} @ {price} / each</Text>
      </View>
      <View style={styles.right}>
        <UpdateItemButton.Remove
          style={{ marginRight: 12 }}
          onPress={() => dispatch({ type: 'remove', id: itemId })}
        />
        <Text style={styles.label}>{quantity}</Text>
        <UpdateItemButton.Add
          style={{ marginLeft: 12 }}
          onPress={() => dispatch({ type: 'add', id: itemId })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
  price: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500'
  },
  left: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    width: '100%',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default CartItem