import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from 'date-fns'

export interface PlantProps {
        id: string;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: [string];
        frequency: {
            times: number;
            repear_every: string;
        },
        dateTimeNotification: Date;
}

// Interface para salvar a planta no storage
interface StoragePlantProps{
    [id: string]: {
        // Objeto com todas as props correspondentes ao ID
        data: PlantProps
    }
}

export async function savePlantAtStorage(plant: PlantProps) : Promise<void>{
    try {
        // Capturando o que está no storage
        const data = await AsyncStorage.getItem('@plantmanager:plants')

        // Caso exista um dado, o dado fica salvo como string, por isso fazemos o JSON.PARSE para virar um objeto do tipo json, caso não tenha dados será um objeto vazio
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        // Mantendo o que já existe e adicionando os novos itens cadastrados
        await AsyncStorage.setItem('@plantmanager:plants', 
        JSON.stringify({
            ...newPlant,
            ...oldPlants
        }))

    } catch(error) {
        console.log(error)
    }
}

// Carregar as plantas
export async function loadPlantFromStorage() : Promise<PlantProps[]>{
    try {
        // Capturando o que está no storage
        const data = await AsyncStorage.getItem('@plantmanager:plants')

        // Caso exista um dado, o dado fica salvo como string, por isso fazemos o JSON.PARSE para virar um objeto do tipo json, caso não tenha dados será um objeto vazio
        const myPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        // Percorrendo cada item de dentro das minhas plantas
        const myPlantsSorted = Object.keys(myPlants).map((plant) => {
            return {
                // Selecionando a planta de dentro da coleção de plantas pela chave única(id)
                ...myPlants[plant].data,
                // Acrescentando a hora 
                hour: format(new Date(myPlants[plant].data.dateTimeNotification), 'HH:mm')
            }
        })
        // Ordenando
        .sort((a, b) => 
            Math.floor(
                new Date(a.dateTimeNotification).getTime() / 1000 - Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
            )
        )

        return myPlantsSorted

    } catch(error) {
        throw(error)
    }
}