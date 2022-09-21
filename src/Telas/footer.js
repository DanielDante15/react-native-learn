import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import { TextInput } from "react-native";

function Footer() {
  const [color, setColor] = useState("white");

  return (
    <View
      style={{
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
            padding: "1vh",
            backgroundColor:'white'
          }}
      >
        <Button color="red" title="Vermelho" onPress={() => setColor("red")} />
      </View>
      <View
       style={{
        padding: "1vh",
        backgroundColor:'white'
      }}
      >

        <Button
          color="blue"
          title="Azul"
          onPress={() => setColor("blue")}
          style={{ padding: "10px" }}
        />
      </View>
      <View
        style={{
            padding: "1vh",
            backgroundColor:'white'
          }}
      >
        <Button color="green" title="Verde" onPress={() => setColor("green")} />
      </View>
    </View>
  );
}


export default Footer;
