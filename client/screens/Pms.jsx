import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const Led = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "space-between",
          height: "50%",
          width: "100%",
        }}
      >
        {/* hiding MWL and phTDS data temporary ! */}
        <Button style={styles.btn} onPress={() => navigation.navigate("mwl")}>
          <Text style={{ color: "white" }}>MWL</Text>
        </Button>
        <Button style={styles.btn} onPress={() => navigation.navigate("phtds")}>
          <Text style={{ color: "white" }}>pHTDS</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#16a0b2",
    color: "white",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#202425",
    alignSelf: "center",
    width: "70%",
    borderRadius: 20,
  },
});

export default Led;
