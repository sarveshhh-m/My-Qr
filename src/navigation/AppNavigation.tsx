import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import React from 'react'
import { Favourite, History, Home, Scanner, Settings } from '../screens'

const Tab = createBottomTabNavigator()
const AppNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Scanner" component={Scanner} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
    )
}

export default AppNavigation