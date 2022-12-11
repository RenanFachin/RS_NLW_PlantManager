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
        <RectButton 
            {...rest} 
            // Atribuindo vetor de estilos
            style={[
                styles.listStyle, 
                active && styles.listStyleActive
            ]}
        >

            <Text 
            // Atribuindo vetor de estilos para uma condicional de propriedade
            style={[
                styles.text,
                active && styles.textActive
            ]}>
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
        marginHorizontal: 5
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    listStyleActive: {
        backgroundColor: colors.green_light
    },
    textActive:{
        color: colors.green_dark,
        fontFamily: fonts.heading,
    }  
})