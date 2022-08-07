import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const Fog = () => {
  const handleFog = () => {};
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text>LED Effects</Text>
      </View>
      <View
        style={{
          marginTop: 100,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Button style={styles.btnFog} onPress={handleFog}>
          <Text style={{ color: "#fff" }}>Pattern 1</Text>
        </Button>
        <Button style={styles.btnFog} onPress={handleFog}>
          <Text style={{ color: "#fff" }}>Pattern 2</Text>
        </Button>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Button style={styles.btnFog} onPress={handleFog}>
          <Text style={{ color: "#fff" }}>Pattern 3</Text>
        </Button>
        <Button style={styles.btnFog} onPress={handleFog}>
          <Text style={{ color: "#fff" }}>Pattern 4</Text>
        </Button>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Button style={styles.btnFogFifth} onPress={handleFog}>
          <Text style={{ color: "#fff" }}>Pattern 5</Text>
        </Button>
        {/* <Button style={styles.btnFog} onPress={handleFog}>
          <Text style={{ color: "#fff" }}>16 min</Text>
        </Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
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
    width: "40%",
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

  btnFogFifth: {
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
    marginRight: 160,
  },
});

export default Fog;
