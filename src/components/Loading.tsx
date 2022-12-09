import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../styles/colors';


export function Loading() {
  return (
    <View style={styles.container}>

    <ActivityIndicator  color={colors.green_dark} size="large"/>

    </View>
  );
}

export const styles = StyleSheet.create({
    container: {
      // Flex: 1 é para o componente utilizar sempre o máximo do tamanho disponível
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });