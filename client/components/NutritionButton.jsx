import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import axios from "axios";
import { FancyAlert } from "react-native-expo-fancy-alerts";

const NutritionButton = ({ text, v1, v2 }) => {
  const IP = "192.168.4.1";

  const handleFogOn = () => {
    console.log(`https://${IP}/${text}on`);
    axios.post(`https://${IP}/${text}on`);
  };

  const handleFogOff = () => {
    console.log(`https://${IP}/${text}off`);
    axios.post(`https://${IP}/${text}off`);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <Text style={styles.input}>{text}</Text>
      <Button style={styles.btn} onPress={handleFogOn}>
        <Text style={{ color: "#fff" }}> ON </Text>
      </Button>
      <Button style={styles.btn} onPress={handleFogOff}>
        <Text style={{ color: "#fff" }}> OFF </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f1f1f1",
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
    borderRadius: 20,
  },

  btn: {
    backgroundColor: "#16a0b2",
    color: "white",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#202425",
    alignSelf: "center",
    width: "30%",
    borderRadius: 20,
    elevation: 5,
  },

  btnFog: {
    height: 60,
    width: 80,
    backgroundColor: "#16a0b2",
    color: "white",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#202425",
    alignSelf: "center",
    width: "40%",
    borderRadius: 20,
    elevation: 10,
  },
});

export default NutritionButton;
