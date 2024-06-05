import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './AppNavigation'

const Stack = createNativeStackNavigator()
const RootNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AppNavigation" component={AppNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation