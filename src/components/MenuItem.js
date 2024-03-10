import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import UpdateItemButton from './UpdateItemCountButton'

/**
 * 
 * @param {string} name Name of the menu item
 * @param {number} price Price of (1) count of the item
 * @returns JSX.Element
 */
const MenuItem = ({ name, price, onPress = () => {} }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? 'deepskyblue' : 'white' },
        styles.container,
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text>{name}</Text>
        <View style={styles.right}>
          <Text style={{ marginRight: 8 }}>${price}</Text>
          <UpdateItemButton.Add />
        </View>
      </View>
      <View style={styles.separator} />
    </Pressable>
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
  container: {
    display: 'flex',
    width: '100%',
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