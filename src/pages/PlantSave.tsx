import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity, Platform } from 'react-native'

// Com o useRoute é possível recuperar parâmetros passados pela rota
import { useRoute } from '@react-navigation/core'

import WaterDrop from '../assets/waterdrop.png'
import { SvgFromUri } from 'react-native-svg'
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface Params {
    plant: {
        id: string;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: [string];
        frequency: {
            times: number;
            repear_every: string;
        }
    }
}

export function PlantSave(){
    const route = useRoute()
    const {plant} = route.params as Params 


    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri uri="" height={150} width={150}/>

                <Text style={styles.plantName}>
                    Nome da planta
                </Text>

                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, sapiente porro possimus distinctio rem.
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image 
                    source={WaterDrop} 
                    style={styles.tipImage}
                    />

                    <Text style={styles.tipText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                <Button 
                    title={"Cadastrar planta"}
                    onPress={() => {}}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 24,
        lineHeight: 32,   
        marginTop: 32
    },
    plantAbout: {
        fontSize: 16,
        fontFamily: fonts.text,
        colors: colors.body_dark,
        textAlign: 'center',
        marginTop: 16,
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 32,
        paddingVertical: 40,
    },
    tipContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 16,
        borderRadius: 20,
        // Subindo o tipcontainer para ficar meio a meio com o background
        position: 'relative',
        bottom: 85
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 24,
        marginRight: 40,
        lineHeight: 24,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 14,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.body_light,
        fontSize: 14,
        lineHeight: 24,
        marginBottom: 40
    }
})