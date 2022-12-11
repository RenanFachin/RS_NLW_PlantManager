import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from "../styles/colors";

import fonts from "../styles/fonts";

// Fazendo o uso das props já definidas pela lib
interface EnviromentButtonProps{
    title: string;
    active?: boolean;
    onPress: () => void;
}



export function EnviromentButton({title, active=false, ...rest}: EnviromentButtonProps){
    return(
        <TouchableOpacity 
            // Atribuindo vetor de estilos
            style={[
                styles.listStyle, 
                active && styles.listStyleActive
            ]}
            {...rest} 
        >

            <Text 
            // Atribuindo vetor de estilos para uma condicional de propriedade
            style={[
                styles.text,
                active && styles.textActive
            ]}>
                {title}
            </Text>

        </TouchableOpacity>
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