import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
const { Navigator, Screen } = createBottomTabNavigator();

import { PlusCircle, Leaf } from 'phosphor-react-native'
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator()

export function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.green,
                tabBarInactiveTintColor: colors.heading,
                tabBarLabelPosition: 'beside-icon', // um ao lado do outro
                tabBarStyle: {
                    paddingVertical: 20,
                    height: 88
                }
            }}  
        >

            <Screen 
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: ({size, color}) => <PlusCircle color={color} size={size} />,
                }}
            />

            <Screen 
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: ({size, color}) => <Leaf color={color} size={size} />,
                }}
            />

        </Navigator>
    )
}