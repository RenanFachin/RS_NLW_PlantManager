import React, { useEffect } from 'react'
import { NativeBaseProvider } from "native-base";
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'
import * as Notifications from 'expo-notifications'

import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import { PlantProps } from './src/libs/storage';



export default function App(){
  // Garantindo que as fontes tenham sido carregadas
  // Armazenando o retorno (booleano) dentro de fontsLoaded
  const [ fontsLoaded ] = useFonts({
    // Passar para o useFonts o objeto com as fontes
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold 
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps
        console.log(data)
      })

      return () => subscription.remove()
  },[])
  
  return(
    <NativeBaseProvider>
      { fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  )
}

