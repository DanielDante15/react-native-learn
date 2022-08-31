import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from './src/Telas/tela_inicial';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TelaLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
