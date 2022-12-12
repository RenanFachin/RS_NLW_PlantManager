import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { Header } from "../components/Header";

import { PlantProps, loadPlantFromStorage } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import colors from "../styles/colors";
import WaterDrop from '../assets/waterdrop.png'
import fonts from "../styles/fonts";
import { PlantCardSecondary } from "../components/PlantCard/PlantCardSecondary";


export function MyPlants(){
    const [myPlants, setMyPlants] = useState<PlantProps[]>([])
    const [loading, setLoading] = useState(true)
    const [nextWatered, setNextWatered] = useState<string>()

    useEffect(() => {
        async function loadStoragePlants(){
            const myPlantsStoraged = await loadPlantFromStorage()

            const nextTime = formatDistance(
                new Date(myPlantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            )

            // Armazenando as infos nos states
            setNextWatered(`Não esqueça de regar a ${myPlantsStoraged[0].name} à ${nextTime}.`)

            setMyPlants(myPlantsStoraged)
            setLoading(false)
        }

        loadStoragePlants()
    },[])


    return(
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image 
                    source={WaterDrop} 
                    style={styles.spotlightImage}
                />

                <Text style={styles.spotlightText}>
                    {nextWatered}
                </Text>
            </View>


            <View style={styles.allMyPlants}>
                <Text style={styles.allMyPlantsTitle}>
                    Próximas regas
                </Text>

                <FlatList 
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardSecondary 
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flex: 1}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {
        backgroundColor: colors.blue_light,
        padding: 16,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40
    },
    spotlightImage: {
        width: 56,
        height: 56,
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        textAlign: 'justify',
        marginLeft: 24,
        paddingRight: 36,
        fontSize: 15
    },
    allMyPlants: {
        flex: 1,
        width: '100%'
    },
    allMyPlantsTitle: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: fonts.heading,
        colors: colors.heading,
        marginTop: 40,
        marginBottom: 16
    }
})