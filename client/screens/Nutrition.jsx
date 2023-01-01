import { View, Text, StyleSheet } from "react-native";
import React from "react";
import NutritionButton from "../components/NutritionButton";
import { Button } from "react-native-paper";
import axios from "axios";
import { useDispatch } from "react-redux";
import { IPfuncitons } from "../api/IPRequest";

// Ip Testing
const IP = "192.168.4.1";

const Nutrition = () => {
  const dispatch = useDispatch();

  const handlePhRead = async () => {
    dispatch(IPfuncitons("phread"));
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 100, fontSize: 30, marginBottom: 40 }}>
        Nutrition System
      </Text>
      <NutritionButton text="n" v1={20} v2={40} />
      <NutritionButton text="p" v1={20} v2={40} />
      <NutritionButton text="k" v1={20} v2={40} />
      <Button style={styles.btnPhTds} onPress={handlePhRead}>
        <Text style={{ color: "white" }}>pH read</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },

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
    width: "100%",
    borderRadius: 20,
  },

  btnPhTds: {
    backgroundColor: "#16a0b2",
    color: "white",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#202425",
    alignSelf: "center",
    width: "50%",
    borderRadius: 20,
    marginTop: 40,
  },
});

export default Nutrition;
