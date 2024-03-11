import React from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

/**
 * Base button shared between the add / remove buttons.
 * 
 * @typedef UpdateCountButtonProps
 * @type {typeof Pressable.props}
 * 
 * @param {{ children: React.ReactNode & UpdateCountButtonProps }} props 
 * @returns JSX.Element
 */
const UpdateCountButton = ({ children, ...otherProps }) => (
  <Pressable
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    {...otherProps}
  >
    {children}
  </Pressable>
)

/**
 * Button that adds items.
 * 
 * @param {UpdateCountButtonProps} props 
 * @returns JSX.Element
 */
const AddItemButton = (props) => (
  <UpdateCountButton {...props}>
    {({ pressed }) => (
      <Ionicons
        name="add-circle"
        size={32}
        color={pressed ? 'forestgreen' : 'darkgreen'}
      />
    )}
  </UpdateCountButton>
)

/**
 * Button that subtracts items.
 * 
 * @param {UpdateCountButtonProps} props 
 * @returns JSX.Element
 */
const RemoveItemButton = (props) => (
  <UpdateCountButton {...props}>
    {({ pressed }) => (
      <Ionicons
        name="remove-circle"
        size={32}
        color={pressed ? 'firebrick' : 'darkred'}
      />
    )}
  </UpdateCountButton>
)

UpdateCountButton.Add = (props) => <AddItemButton {...props} />
UpdateCountButton.Remove = (props) => <RemoveItemButton {...props} />

export default UpdateCountButton