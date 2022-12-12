import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity, Platform } from 'react-native'

import WaterDrop from '../assets/waterdrop.png'
import { SvgFromUri } from 'react-native-svg'
import { Button } from "../components/Button";
import colors from "../styles/colors";

export function PlantSave(){
    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri uri="" height={150} width={150}/>

                <Text style={styles.plantName}>
                    Nome da planta
                </Text>

                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, sapiente porro possimus distinctio rem, eos pariatur saepe quibusdam commodi autem sed placeat, velit atque? Quia accusamus veritatis eius ex quos!
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

    },
    plantName: {

    },
    plantAbout: {

    },
    controller: {

    },
    tipContainer:{

    },
    tipImage: {

    },
    tipText: {
        
    },
    alertLabel: {

    }
})