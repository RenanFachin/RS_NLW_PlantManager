import React from "react";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'




// Lidando com SVGS
import { SvgFromUri } from 'react-native-svg'



interface PlantProps extends TouchableOpacityProps  {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    // Tipando também o recebimento de uma função
    handleRemove: () => void
}

export function PlantCardSecondary({ data, handleRemove, ...rest }: PlantProps) {
    return (
            <TouchableOpacity 
            {...rest} 
            style={styles.container}                             
            onPress={handleRemove}
            >
                <SvgFromUri
                    uri={data.photo}
                    width={60}
                    height={60}
                />

                <Text style={styles.title}>
                    {data.name}
                </Text>

                <View style={styles.plantDetails}>
                    <Text style={styles.waterDetailsText}>
                        Regar às
                    </Text>

                    <Text style={styles.waterDetails}>
                        {data.hour}
                    </Text>
                </View>
            </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 20,
        padding: 16,
        marginBottom: 8,
        backgroundColor: colors.shape,
    },
    title: {
        flex: 1,
        marginLeft: 16,
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 18
    },
    plantDetails: {
        alignItems: 'flex-end'
    },
    waterDetailsText: {
        fontSize: 13,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    waterDetails: {
        marginTop: 6,
        fontSize: 13,
        fontFamily: fonts.heading,
        color: colors.body_dark
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 10,
        paddingLeft: 16
    }
})