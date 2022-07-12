import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Button } from "react-native-paper";

const Register = ({ navigation }) => {
  const avatar = "Da";

  const handleImage = () => {};
  const handleRegister = () => {};

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const primaryColor = "#16a0b2";

  return (
    <View style={styles.container}>
      {/* <Avatar
        size={100}
        source={{ uri: avatar ? avatar : null }}
        style={{ backgroundColor: "#900" }}
      /> */}
      <TouchableOpacity onPress={handleImage}>
        <Text style={{ color: "#16a0b2" }}>Change Photo</Text>
      </TouchableOpacity>

      <View style={{ width: "70%" }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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
          disabled={!email || !password || !name}
          style={styles.btn}
          onPress={handleRegister}
        >
          <Text style={{ color: "#fff" }}>Login</Text>
        </Button>

        <TouchableOpacity
          style={{ height: 30, margin: 20 }}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={{ color: primaryColor }}>
            Already Have An Account ? Login
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

export default Register;
