import React from "react";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { StyleSheet, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

// Lidando com SVGS
import { SvgFromUri } from 'react-native-svg'


interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
    }
}

export function PlantCardPrimary({ data, ...rest }:PlantProps){
    return(
        <RectButton style={styles.container} {...rest}>
            <SvgFromUri uri={data.photo} width={80} height={80} style={styles.image}/>

            <Text style={styles.text}>
                { data.name }
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.heading,
        marginVertical: 16
    },
    image: {
        marginTop: 16
    }
})