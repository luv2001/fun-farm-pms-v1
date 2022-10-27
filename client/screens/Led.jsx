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
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate("colorpicker")}
        >
          <Text style={{ color: "white" }}>COLOR PICKER</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate("ledeffects")}
        >
          <Text style={{ color: "white" }}>LED Effects</Text>
        </Button>
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate("templedreplacement")}
        >
          <Text style={{ color: "white" }}> 5 colors </Text>
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
