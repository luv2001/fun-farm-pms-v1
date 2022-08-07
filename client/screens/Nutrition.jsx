import { View, Text, StyleSheet } from "react-native";
import React from "react";
import NutritionButton from "../components/NutritionButton";

const Nutrition = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 100, fontSize: 30, marginBottom: 40 }}>
        Nutrition System
      </Text>
      <NutritionButton text="N" v1={20} v2={40} />
      <NutritionButton text="P" v1={20} v2={40} />
      <NutritionButton text="K" v1={20} v2={40} />
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
});

export default Nutrition;
