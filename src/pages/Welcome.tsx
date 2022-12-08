import React from 'react'
import { Button } from '../components/Button'
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

// TouchableOpacity é um elemento que faz um efeito de opacidade ao ser pressionado
// SafeAreaView é semelhante ao View porém utilizando apenas áreas "seguras" de cada device
// {'\n'} faz uma quebra de linha

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'

export function Welcolme(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencia {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image}/>

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title={'>'} />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 80,
        lineHeight: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.body_dark,
        lineHeight: 25
    },
    image: {
        width: 292,
        height: 292,
    }
})