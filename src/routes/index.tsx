import React from "react";

import { NavigationContainer } from '@react-navigation/native'

// Importando as rotas da aplicação
import StackRoutes from './stack.routes'

export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}