import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Favourite, History, Home, Scanner, Settings } from '../screens';
import { TabBar, TabbarHeader } from '../components';

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
            screenOptions={{
                // headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#171717',
                    borderTopColor: '#171717',
                    height: 72,
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#aaa',
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                header: ({ route }) => <TabbarHeader title={route.name} />
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Scanner" options={{ headerShown: false }} component={Scanner} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
    );
};

export default AppNavigation;
