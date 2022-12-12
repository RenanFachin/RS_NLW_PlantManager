import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity, Platform } from 'react-native'
import { PlantProps } from "../libs/storage";

// Com o useRoute é possível recuperar parâmetros passados pela rota
import { useRoute } from '@react-navigation/core'
import DateTimePicker , { Event } from '@react-native-community/datetimepicker'
import { format, isBefore } from "date-fns";

import WaterDrop from '../assets/waterdrop.png'
import { SvgFromUri } from 'react-native-svg'
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface Params {
    plant: PlantProps
}

export function PlantSave(){
    const route = useRoute()
    const { plant } = route.params as Params 

    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === "android") {
          setShowDatePicker((oldState) => !oldState);
        }
    
        if (dateTime && isBefore(dateTime, new Date())) {
          setSelectedDateTime(new Date());
          return Alert.alert("Escolha uma hora no futuro! ⏰");
        }
    
        if (dateTime) setSelectedDateTime(dateTime);
      }

    function handleOpenDateTimePickerForAndroidDevices(){
        setShowDatePicker((oldState) => !oldState);
    }

    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri uri={plant.photo} height={150} width={150}/>

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>

                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image 
                    source={WaterDrop} 
                    style={styles.tipImage}
                    />

                    <Text style={styles.tipText}>
                        {plant.water_tips} 
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                {
                    showDatePicker && 
                    (
                    <DateTimePicker 
                        value={selectedDateTime}
                        mode="time"
                        negativeButtonLabel="Cancelar"
                        positiveButtonLabel="Confirmar horário"
                        onChange={handleChangeTime}
                    />
                    )
                }

                {
                    Platform.OS === 'android' && (
                        <TouchableOpacity
                            style={styles.dateTimePickerButton} 
                            onPress={handleOpenDateTimePickerForAndroidDevices}
                        >
                            <Text style={styles.dateTimePickerText}>
                                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                            </Text>
                        </TouchableOpacity>
                    )
                }

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
    },
    dateTimePickerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40
    },
    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    },
})