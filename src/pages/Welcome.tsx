import React from 'react'
import { 
    SafeAreaView, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions,
    View 
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


// TouchableOpacity é um elemento que faz um efeito de opacidade ao ser pressionado
// SafeAreaView é semelhante ao View porém utilizando apenas áreas "seguras" de cada device
// {'\n'} faz uma quebra de linha

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Welcome(){

    const navigation = useNavigation()
    function handleStart(){
        navigation.navigate('User')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            <Image 
                source={wateringImg} 
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handleStart}>
                    <Feather 
                        name="chevron-right" 
                        style={styles.buttonIcon}
                    />
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 60,
        lineHeight: 36
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.body_dark,
        lineHeight: 25,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 28,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 28
    }
})