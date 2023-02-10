import { View, Text } from 'react-native'
import Body from './src/Telas/body'
import Footer from './src/Telas/footer';
import { useDeviceOrientation } from '@react-native-community/hooks';
import Botao from './src/components/botao';
import { StatusBar } from 'expo-status-bar';

function App() {

  const orientation = useDeviceOrientation()
  console.log('orientation is:', orientation);
  return (
    <View>
      {/* <Footer/>
    <Body/> */}
      <StatusBar style='auto' />
    
      <Botao icon='login' type='error' >
        Entrar
      </Botao>
      <Botao  icon='logout' type='success' >
        Logout
      </Botao>
      <Botao>
        Teste
      </Botao>
    
    </View>
  );
}


const styles = StyleSheet


export default App;


