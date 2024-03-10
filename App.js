import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MenuScreen, { CartButton } from 'screens/MenuScreen'
import CheckoutScreen from 'screens/CheckoutScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({ navigation }) => ({
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerRight: () => (
              <CartButton onPress={() => navigation.navigate('Cart')} />
            ),
          })}
        />
        <Stack.Screen name="Cart" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
