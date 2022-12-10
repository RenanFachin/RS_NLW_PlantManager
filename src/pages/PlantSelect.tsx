import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />

            <Text style={styles.title}>
                Em qual ambiente
            </Text>

            <Text style={styles.subtitle}>
                você deseja colocar sua planta?
            </Text>

            <EnviromentButton title={'Sala'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 32,
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 23,
        marginTop: 40
    },
    subtitle: {
        fontFamily: fonts.complement,
        lineHeight: 23
    }
})