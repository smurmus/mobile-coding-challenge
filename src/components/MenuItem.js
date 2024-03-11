import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-root-toast'

import UpdateItemButton from './UpdateItemCountButton'
import { useShoppingCart, useShoppingCartDispatch } from '../providers/ShoppingContext'

/**
 * 
 * @param {{ itemId: string }} props 
 * @returns JSX.Element
 */
const MenuItem = ({ itemId }) => {
  const { cart } = useShoppingCart()
  const dispatch = useShoppingCartDispatch()

  const { name, price } = cart[itemId]

  return (
    <>
      <View style={styles.content}>
        <Text>{name}</Text>
        <View style={styles.right}>
          <Text style={{ marginRight: 8 }}>${price.toFixed(2)}</Text>
          <UpdateItemButton.Add
            onPress={() => {
              dispatch({ type: 'add', id: itemId })
              Toast.show(`${name} added`, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER
              })
            }}
          />
        </View>
      </View>
      <View style={styles.separator} />
    </>
  )
}

const styles = StyleSheet.create({
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
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  }
})

export default MenuItem