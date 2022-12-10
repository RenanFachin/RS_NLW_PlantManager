import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native'

import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation() {
    const navigation = useNavigation()

    function handleMoveOn(){
        navigation.navigate('PlantSelect')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😁
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado!
                </Text>

                <View style={styles.footer}>
                    <Button title={'Começar'} onPress={handleMoveOn}/>
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 76
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 64
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 10,
        colors: colors.heading,
        lineHeight: 24,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 40,
        marginTop: 40
    }
})