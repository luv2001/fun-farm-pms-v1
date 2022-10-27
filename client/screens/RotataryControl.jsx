import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import axios from "axios";

import Icon from "react-native-vector-icons/Entypo";

const RotataryControl = () => {
  //Testing Starts

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
      <View style={{ marginTop: 100, marginBottom: 50 }}>
        <Text style={{ fontSize: 40 }}>Rotatary Control</Text>
      </View>
      <Text style={{ marginLeft: "50%" }}>Disable Enable</Text>
      <Switch
        style={{ marginLeft: "50%" }}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "90%",
        }}
      >
        <Button style={styles.btnEnable} onPress={handleEnable}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Clock</Text>
        </Button>
        <Button style={styles.btnEnable} onPress={handleDisable}>
          <Text style={{ color: "#fff", fontSize: 20 }}>anti</Text>
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

export default RotataryControl;
