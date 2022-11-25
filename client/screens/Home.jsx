import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-native-paper";

import Icon from "react-native-vector-icons/Entypo";

import { Dialog } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  // Window size
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  // Testing Urls IP

  const IP = "192.168.4.1";

  const handleAuto = () => {
    axios.post(`https://${IP}/automate`);
  };

  const handleManual = () => {
    axios.post(`https://${IP}/manual`);
  };

  //Testing Ends

  const primaryColor = "#16a0b2";

  const [name, setName] = useState("");

  const handleFog = () => {};

  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");
    const userObject = JSON.parse(user);
    setName(userObject.name);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginBottom: 100,
          flexDirection: "row",
          justifyContent: "space-around",
          width: "90%",
        }}
      >
        <Button style={styles.btnEnable} onPress={handleAuto}>
          <Text style={{ color: "#fff" }}>Auto</Text>
        </Button>
        <Button style={styles.btnEnable} onPress={handleManual}>
          <Text style={{ color: "#fff" }}>Manual</Text>
        </Button>
      </View>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>User</Text>
        <Text style={{ fontSize: 20 }}>User Name</Text>
      </View>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Model Name</Text>
        <Text style={{ fontSize: 20 }}>Mediaum Hybrid</Text>
      </View>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Model Id</Text>
        <Text style={{ fontSize: 20 }}>af-01/MH</Text>
      </View>
      <View
        style={{
          paddingTop: 160,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("pms")}
        >
          <Icon name="list" size={35} color={primaryColor} />
          <Text style={styles.iconText}>pms</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("led")}
        >
          <Icon name="light-up" size={35} color={primaryColor} />
          <Text style={styles.iconText}>Led</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("fog")}
        >
          <Icon name="water" size={35} color={primaryColor} />
          <Text style={styles.iconText}>Fog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("nutrition")}
        >
          <Icon name="flower" size={35} color={primaryColor} />
          <Text style={styles.iconText}>Nutrition</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("rotatary")}
        >
          <Icon name="cw" size={35} color={primaryColor} />
          <Text style={styles.iconText}>Rotatary</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },

  icon: {
    backgroundColor: "#ffffff",
    width: 70,
    height: 70,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
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

  iconText: {
    color: "#16a0b2",
    alignSelf: "center",
  },
});

export default Home;
