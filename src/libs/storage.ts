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
export async function loadPlantFromStorage() : Promise<StoragePlantProps>{
    try {
        // Capturando o que está no storage
        const data = await AsyncStorage.getItem('@plantmanager:plants')

        // Caso exista um dado, o dado fica salvo como string, por isso fazemos o JSON.PARSE para virar um objeto do tipo json, caso não tenha dados será um objeto vazio
        const myPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        return myPlants;

    } catch(error) {
        throw(error)
    }
}