import React from 'react'
import { Welcolme } from './src/pages/Welcome'
import { Loading } from './src/components/Loading'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'


export default function App(){
  // Garantindo que as fontes tenham sido carregadas
  // Armazenando o retorno (booleano) dentro de fontsLoaded
  const [ fontsLoaded ] = useFonts({
    // Passar para o useFonts o objeto com as fontes
    Jost_400Regular,
    Jost_600SemiBold
  })
  
  return(
    <>
      { !fontsLoaded ? <Welcolme /> : <Loading />}
    </>
  )
}

