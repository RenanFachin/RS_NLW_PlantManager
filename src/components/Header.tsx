import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from 'react-native'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// Import da imagem
import userImg from '../assets/ImagemPerfil.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header(){
    // Armazenando o nome do usuário cadastrado na screen de identification
    const [userName, setUserName] = useState<string>()
    
    useEffect(() => {
        async function loadStorageUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user')

            // Armazenando no state
            // o método getItem espera duas condições para o que estiver lá, string ou null, então é necessário fazer (user || ``)
            setUserName(user || ``)
        }


        loadStorageUserName()
    },[])

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>
                    {userName}
                </Text>
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
        marginTop: 28
    },
    greeting: {
        fontSize: 26,
        color: colors.heading,
        fontFamily: fonts.details,
        lineHeight: 36,
    },
    userName: {
        fontSize: 40,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 44,
    },
    userImage: {
        width: 64,
        height: 64,
        borderRadius: 40
    }
})