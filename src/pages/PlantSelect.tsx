import api from '../services/api'
import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native'
// FlatList é um elemento de renderização de listas na tela

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
 
import { Load } from '../components/Load'
import { Header } from '../components/Header'
import { EnviromentButton } from '../components/EnviromentButton'
import { PlantCardPrimary } from '../components/PlantCard/PlantCardPrimary'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { PlantProps } from "../libs/storage";

// Tipando o que vem da API
interface EnvironmentProps {
    key: string;
    title: string;
}


export function PlantSelect(){
    // Definindo que o state terá o environmentProps como tipagem e será um vetor
    // Dados oriundos da API
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([])
    const [plants, setPlants] = useState<PlantProps[]>([])

    // State auxiliar
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
    // State para gerenciar se o cartão está selecionado
    const [environmentSelected, setEnvironmentSelected] = useState('all')

    // State para mostrar a tela de load enquanto os dados não são retornados da API
    const [loading, setLoading] = useState(true)

    // State para gerenciar a páginação
    const [page, setPage] = useState(1)
    const [loadMore, setLoadingMore] = useState(false)

    // Function para selecionar o ambiente
    function handleEnvironmentSelected(environment: string){
        setEnvironmentSelected(environment)
        
        if (environment === 'all'){
            return setFilteredPlants(plants);
        }

        const filtered = plants.filter(plant => 
            plant.environments.includes(environment))

        setFilteredPlants(filtered)
    }

    // Função para buscar os dados de plantas da API
    async function fetchPlants(){
        const { data } = await api.get(`plants?_sort=name&order=asc&_page=${page}&_limit=6`);

        if(!data){
            return setLoading(true)
        }
        
        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setPlants(data)
            setFilteredPlants(data)
        }

        // Após carregar as infos da api, cortar a animação alterando o seu state
        setLoading(false)
        setLoadingMore(false)
    }

    // Qnd o usuário rolar a página e chegar ao final da rolagem, chamar mais dados
    function handleFetchMore(distance: number){
        if(distance < 1){
            return
        }

        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)
        fetchPlants()
    }

    const navigation = useNavigation()

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', {plant})
        // Foi necessário alterar o @types/navigation.d.ts para adicionar que seria passado algo pela rota
    }

    // UseEffect é um hook que é carregado sempre que algo é renderizado
    useEffect(() => {
        async function fetchEnvironment() {
          const { data } = await api.get('plants_environments?_sort=title&order=asc');  

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


        fetchPlants()
    },[])



    if(loading)
        return <Load />
        
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
                    // O react pede, para fins de performance, que a flatlist tenha a chave de identificador único
                    // Transformar a key em string é uma boa prática
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({item}) => (
                        <EnviromentButton 
                            title={item.title}
                            active={item.key === environmentSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
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
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardPrimary 
                            data={item}
                            onPress={() => handlePlantSelect(item)}
                        />
                    )}
                // Desabilitando a rolagem vertical
                showsVerticalScrollIndicator={false}
                // Renderizando duas colunas na lista
                numColumns={2}
                // Paginação
                onEndReachedThreshold={0.3}
                onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                // Renderizando um componente de loading do próprio reactNative
                ListFooterComponent={
                    loadMore ?
                    <ActivityIndicator color={colors.green} />
                    :
                    <></>
                }
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