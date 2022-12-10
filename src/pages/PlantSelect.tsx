import react from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Selecionar planta
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
})