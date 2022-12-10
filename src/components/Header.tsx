import React from "react";
import { StyleSheet, Text, Image, View } from 'react-native'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// Import da imagem
import userImg from '../assets/ImagemPerfil.png'

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Renan</Text>
            </View>

            <Image source={userImg} style={styles.userImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 32,
        marginTop: 28
    },
    greeting: {
        fontSize: 28,
        color: colors.heading,
        fontFamily: fonts.details,
        lineHeight: 36,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 36,
    },
    userImage: {
        width: 64,
        height: 64,
        borderRadius: 40
    }
})