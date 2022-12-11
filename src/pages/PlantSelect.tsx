import api from '../services/api'
import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
// FlatList é um elemento de renderização de listas na tela

import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { PlantCardPrimary } from '../components/PlantCard/PlantCardPrimary'

// Tipando o que vem da API
interface EnvironmentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: String;
    name: String;
    about: String;
    water_tips: String;
    photo: String;
    environments: [String];
    frequency: {
        times: Number;
        repear_every: String;
    }
}

export function PlantSelect(){
    // Definindo que o state terá o environmentProps como tipagem e será um vetor
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([])

    const [plants, setPlants] = useState<PlantProps[]>([])

    // UseEffect é um hook que é carregado sempre que algo é renderizado
    useEffect(() => {
        async function fetchEnvironment() {
          const { data } = await api.get('plants_environments');  

            // Adicionando um novo campo na lista
          setEnvironments([
            {
                key: 'all',
                title: 'Todos'
            },
            ...data
          ])
        }
    
        fetchEnvironment();
      }, []);


    // Buscando as plantas da API
    useEffect(() => {
        async function fetchPlants(){
            const { data } = await api.get('plants');
            setPlants(data)
        }

        fetchPlants()
    },[])

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
                <FlatList 
                    data={environments} 
                    renderItem={({item}) => (
                    <EnviromentButton 
                        title={item.title}
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


            <View style={styles.plants}>
                <FlatList 
                    data={plants}
                    renderItem={({item}) => (
                        <PlantCardPrimary 
                            data={item}
                        />
                    )}
                // Desabilitando a rolagem vertical
                showsVerticalScrollIndicator={false}
                // Renderizando duas colunas na lista
                numColumns={2}
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
    },
    plants: {
        flex: 1,
        justifyContent: 'center'
    }
})