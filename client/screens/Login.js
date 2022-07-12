import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, margin: 20 }}>Hey There ,</Text>
      <Text style={{ fontSize: 20, margin: 20 }}>Welcome Back</Text>

      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          disabled={!email || !password}
          style={styles.btn}
          onPress={handleLogin}
        >
          <Text style={{ color: "#fff" }}>Login</Text>
        </Button>

        <Text style={{ marginTop: 20, alignSelf: "center" }}>OR</Text>

        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => navigation.navigate("register")}
        >
          <Text
            onPress={() => navigation.navigate("register")}
            style={{ height: 30, margin: 20, color: "#16a0b2" }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => navigation.navigate("register")}
        >
          <Text
            onPress={() => navigation.navigate("home")}
            style={{ height: 30, margin: 20, color: "#16a0b2" }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    // backgroundColor: "#16a0b2",
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

export default Login;
