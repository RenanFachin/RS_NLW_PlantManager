import { StyleSheet, View, Text, FlatList } from 'react-native'
// FlatList é um elemento de renderização de listas na tela

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

            <View>
                {/* O flatlist precisa das props data e renderItem */}
                <FlatList data={[1,2,3,4,5]} renderItem={(item) => (
                    <EnviromentButton 
                        title={'Sala'}
                        active
                    />
                )}
                // Propriedade horizontal já muda a orientação da lista
                horizontal
                // Desabilitando a barra de scroll
                showsHorizontalScrollIndicator={false}
                // O flatList precisa desta propro contentContainerStyle para atribuir estilos
                contentContainerStyle={styles.enviromentList}
                />
            </View>
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
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 40
    }
})