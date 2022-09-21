import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import { TextInput } from "react-native";


export default function Body() {
  const [cont, setCont] = useState(0);
  const [resultado,setResultado]=useState('')
  const [operacao,setOperacao]=useState('')
  const operar = ()=> (setResultado(eval(operacao)))


  const contar = () => {setCont(cont + 1)};

  return (
    <View style={styles.container}>
      <Button title="Teste" onPress={() => contar()} />
      <Text>{cont}</Text>

      <TextInput
        style={styles.input}
        value={String((operacao))}
        placeholder="Faça seu calculo"
        onChangeText={(m)=>{setOperacao(m)}}    
      />
      <TextInput
        placeholder="Resultado"
        value={String((resultado))}   
        style={styles.input}   
      />

      <Button
      title = '='
      onPress ={()=>operar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
