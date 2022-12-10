import React from "react";
import { StyleSheet, Text } from 'react-native'
import colors from "../styles/colors";

// Adicionando um botão customizado com o gesture handler já considerando o ambiente em que o usuário está utilizando
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import fonts from "../styles/fonts";

// Fazendo o uso das props já definidas pela lib
interface EnviromentButtonProps extends RectButtonProps{
    title: String;
    active?: Boolean;
}



export function EnviromentButton({title, active=false, ...rest}: EnviromentButtonProps){
    return(
        <RectButton {...rest} style={styles.listStyle}>

            <Text style={styles.text}>
                {title}
            </Text>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    }  
})