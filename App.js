import { View,Text } from 'react-native'
import Body from './src/Telas/body'
import Footer from './src/Telas/footer';
import { useDeviceOrientation } from '@react-native-community/hooks';

function App() {

  const orientation = useDeviceOrientation()
  console.log('orientation is:', orientation);
  return ( 
    <View>
      <Footer/>
    {/* <Body/> */}
    </View> 
   );
}


export default App;


