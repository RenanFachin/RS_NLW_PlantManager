import React from "react";
import colors from '../styles/colors'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator()

import { Welcome } from '../pages/Welcome'
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";


const AppRoutes: React.FC = () => {
    return(
            <Navigator 
            screenOptions={{
                headerShown: false,
                }}>
                <Screen name="Welcome" component={Welcome}/>

                <Screen name="User" component={UserIdentification}/>

                <Screen name="Confirmation" component={Confirmation}/>

                <Screen name="PlantSelect" component={PlantSelect}/>

            </Navigator>
    )
}

export default AppRoutes