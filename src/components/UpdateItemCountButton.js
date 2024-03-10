import React from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const UpdateCountButton = ({ children, ...otherProps }) => (
  <Pressable
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    // state update + visual user feedback (toast?)
    onPress={() => { }}
    {...otherProps}
  >
    {children}
  </Pressable>
)

const AddItemButton = (props) => (
  <UpdateCountButton {...props}>
    {({ pressed }) => (
      <Ionicons
        name="add-circle"
        size={24}
        color={pressed ? 'forestgreen' : 'darkgreen'}
      />
    )}
  </UpdateCountButton>
)

const RemoveItemButton = (props) => (
  <UpdateCountButton {...props}>
    {({ pressed }) => (
      <Ionicons
        name="remove-circle"
        size={24}
        color={pressed ? 'firebrick' : 'darkred'}
      />
    )}
  </UpdateCountButton>
)

UpdateCountButton.Add = (props) => <AddItemButton {...props} />
UpdateCountButton.Remove = (props) => <RemoveItemButton {...props} />

export default UpdateCountButton