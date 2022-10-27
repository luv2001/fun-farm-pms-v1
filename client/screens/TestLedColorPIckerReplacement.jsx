import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import axios from "axios";

const TempLedColorReplacement = () => {
  //Testing Starts

  const IP = "192.168.4.1";

  const handleEnable = () => {
    axios.post(`https://${IP}/ron`);
    // https://IP/ron
  };

  const handleDisable = () => {
    //https://IP/roff
    axios.post(`https://${IP}/roff`);
  };
  const handleColor = (color) => {
    axios.post(`https://${IP}/${color}`);
  };

  //Testing Ends

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text>COLORS</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "90%",
        }}
      >
        <Button style={styles.btnEnable} onPress={handleEnable}>
          <Text style={{ color: "#fff" }}>Enable</Text>
        </Button>
        <Button style={styles.btnEnable} onPress={handleDisable}>
          <Text style={{ color: "#fff" }}>Disable</Text>
        </Button>
      </View>
      <View
        style={{
          marginTop: 100,
          justifyContent: "space-around",
          width: "100%",
          height: "50%",
        }}
      >
        <Button style={styles.btnFog} onPress={() => handleColor("color0")}>
          <Text style={{ color: "#fff" }}>MAGENTA</Text>
        </Button>
        <Button style={styles.btnFog} onPress={() => handleColor("color1")}>
          <Text style={{ color: "#fff" }}>CYAN</Text>
        </Button>
        <Button style={styles.btnFog} onPress={() => handleColor("color2")}>
          <Text style={{ color: "#fff" }}>PURPLE</Text>
        </Button>
        <Button style={styles.btnFog} onPress={() => handleColor("color3")}>
          <Text style={{ color: "#fff" }}>Royal Blue</Text>
        </Button>
        <Button style={styles.btnFog} onPress={() => handleColor("color4")}>
          <Text style={{ color: "#fff" }}>Saffron</Text>
        </Button>
        <Button style={styles.btnFog} onPress={() => handleColor("color5")}>
          <Text style={{ color: "#fff" }}>FH Green</Text>
        </Button>
      </View>
      {/* <View
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
      </View> */}
      {/* <View
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
        <Button style={styles.btnFog} onPress={handleFog}>
          <Text style={{ color: "#fff" }}>16 min</Text>
        </Button>
      </View> */}
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

  btnEnable: {
    backgroundColor: "#16a0b2",
    color: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#202425",
    alignSelf: "center",
    width: "45%",
    borderRadius: 20,
    elevation: 100,
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

export default TempLedColorReplacement;
