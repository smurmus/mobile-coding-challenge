import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CartItem from '../components/CartItem'
import { useShoppingCart } from '../providers/ShoppingContext'

export default () => {
  const { cart, total } = useShoppingCart()
  console.log('TOTES:::', cart)

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          flex: 1
        }}
      >
        {Object.keys(cart).map(itemId => (
          <CartItem key={itemId} itemId={itemId} />
        ))}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>${total.toFixed(2)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  totalContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 64,
  },
  total: {
    fontSize: 24,
    fontWeight: '600',
  },
  container: {
    flex: 1,
  },
})