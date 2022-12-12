import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator()

import { Welcome } from '../pages/Welcome'
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSave } from "../pages/PlantSave";
import { MyPlants } from "../pages/MyPlants";
import { AuthRoutes } from "./tab.routes";


const AppRoutes: React.FC = () => {
    return(
            <Navigator 
            screenOptions={{
                headerShown: false,
                }}>
                <Screen name="Welcome" component={Welcome}/>

                <Screen name="User" component={UserIdentification}/>

                <Screen name="Confirmation" component={Confirmation}/>

                <Screen name="PlantSelect" component={AuthRoutes}/>

                <Screen name="PlantSave" component={PlantSave}/>

                <Screen name="MyPlants" component={AuthRoutes}/>

            </Navigator>
    )
}

export default AppRoutes