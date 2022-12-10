import {
    StyleSheet
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '../components/Header'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect(){
    return(
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
})