export declare global {
    namespace ReactNavigation{
        interface RootParamList {
            // undefined = significa que a rota não necessita de nenhum parâmetro

            Welcome: undefined;
            User: undefined;
            Confirmation: Params;
            PlantSelect: undefined;
            PlantSave: PlantProps; // aqui é para dizer o que vai ser passado parâmetro na rota
            MyPlants: undefined;
        }
    }
}