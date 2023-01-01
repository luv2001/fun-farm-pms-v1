import { View, Text, StyleSheet } from "react-native";
import React from "react";
import axios from "axios";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { IPfuncitons } from "../api/IPRequest";

const Fog = () => {
  // // Testing Urls IP

  // //axios Starts
  // const url = `https://fun-farmhouse.herokuapp.com/api/v1/pms`; // Testing URL

  // const API = axios.create({
  //   baseURL: `${url}`,
  // });
  // //axios ends

  // const IP = "192.168.4.1";

  // const handleAuto = () => {
  //   API.post(`https://${IP}/automate`);
  // };

  // const handleManual = () => {
  //   API.post(`https://${IP}/manual`);
  // };

  // //Testing Ends

  //Testing Starts

  const dispatch = useDispatch();

  const IP = "192.168.4.1";

  const handleEnable = async () => {
    dispatch(IPfuncitons("automate"));
  };

  const handleDisable = async () => {
    dispatch(IPfuncitons("manual"));
  };

  //fogOn fogOff

  const handleFogOn = async () => {
    dispatch(IPfuncitons("fogOn"));
  };

  const handleFogOff = async () => {
    dispatch(IPfuncitons("fogOff"));
  };

  const handleFog = async (num) => {
    dispatch(IPfuncitons(`cycle${num}`));
  };

  const handleCycle = async () => {
    dispatch(IPfuncitons("cycle10s"));
  };

  //Testing Ends

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 100,
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
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Button style={styles.btn} onPress={() => handleFog(6)}>
          <Text style={{ color: "#fff" }}>6 min</Text>
        </Button>
        <Button style={styles.btn} onPress={() => handleFog(8)}>
          <Text style={{ color: "#fff" }}>8 min</Text>
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
        <Button style={styles.btn} onPress={() => handleFog(10)}>
          <Text style={{ color: "#fff" }}>10 min</Text>
        </Button>
        <Button style={styles.btn} onPress={() => handleFog(12)}>
          <Text style={{ color: "#fff" }}>12 min</Text>
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
        <Button style={styles.btn} onPress={() => handleFog(14)}>
          <Text style={{ color: "#fff" }}>14 min</Text>
        </Button>
        <Button style={styles.btn} onPress={() => handleFog(16)}>
          <Text style={{ color: "#fff" }}>16 min</Text>
        </Button>
      </View>

      <View
        style={{
          marginTop: 10,
          marginRight: "40%",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Button style={styles.btn} onPress={() => handleFog(18)}>
          <Text style={{ color: "#fff" }}>18 min</Text>
        </Button>
      </View>

      <View
        style={{
          marginTop: 70,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Button style={styles.btnFog} onPress={handleFogOn}>
          <Text style={{ color: "#fff" }}>Fog On</Text>
        </Button>
        <Button style={styles.btnFog} onPress={handleFogOff}>
          <Text style={{ color: "#fff" }}>Fog Off</Text>
        </Button>
      </View>
      <View
        style={{
          marginTop: 30,
          marginRight: "40%",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <Button style={styles.btn} onPress={handleCycle}>
          <Text style={{ color: "#fff" }}>10s</Text>
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

export default Fog;
