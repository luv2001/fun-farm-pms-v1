import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";

import { Dialog } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const primaryColor = "#16a0b2";

  const [name, setName] = useState("");

  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");
    const userObject = JSON.parse(user);
    setName(userObject.name);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>User</Text>
        <Text style={{ fontSize: 20 }}>{name}</Text>
      </View>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Model Name</Text>
        <Text style={{ fontSize: 20 }}>Mediaum Hybrid</Text>
      </View>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Model Id</Text>
        <Text style={{ fontSize: 20 }}>fun-farm-01/MH</Text>
      </View>
      <View
        style={{
          paddingTop: 440,
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 240,
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

  iconText: {
    color: "#16a0b2",
    alignSelf: "center",
  },
});

export default Home;
