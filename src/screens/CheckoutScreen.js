import React from 'react'
import { View } from 'react-native'

import CartItem from '../components/CartItem'

export default () => {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}>
      <CartItem itemId="gyuudon" />
    </View>
  )
}
