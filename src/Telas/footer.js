import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-web";
import { TextInput } from "react-native";

function Footer() {

  const [aleatorio, setAleatorio] = useState(1);
  const url = `https://picsum.photos/id/${aleatorio}/200/300`

  return (
    <View
      style={{
        backgroundColor: 'white',
        display: "block",
        alignItems: "center",
        height: "100vh",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: "1vh",
          backgroundColor: 'white'
        }}
      >
        <Image source={{ uri: url, width: 200, height: 300 }} />
      </View>



      <View>
        <Button style={{paddingTop:10}} color="red" title="Gerar imagem" onPress={() => setAleatorio(aleatorio + 1)} />
      </View>





    </View>
  );
}


export default Footer;
