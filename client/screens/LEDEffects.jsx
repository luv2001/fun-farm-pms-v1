import { View, Text, StyleSheet, Dimensions, Switch } from "react-native";
import React, { useState2 } from "react";
import { Button } from "react-native-paper";
import axios from "axios";

const Fog = () => {
  //responsiveness windwow height and width
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  //Testing Starts

  const IP = "192.168.4.1";

  const handleLedEffects = (effect) => {
    axios.post(`https://${IP}/${effect}`);
  };

  //Testing Ends

  //Toggle starts : Enable - Disanle
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  //Toggle ends

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text>LED Effects</Text>
      </View>
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
          marginTop: 100,
          justifyContent: "space-around",
          width: "100%",
          height: "50%",
          // flexDirection: "row",
          // flexWrap: "wrap",
        }}
      >
        <Button
          style={styles.btnFog}
          onPress={() => handleLedEffects("rainbow")}
        >
          <Text style={{ color: "#fff" }}>Rainbow</Text>
        </Button>
        <Button
          style={styles.btnFog}
          onPress={() => handleLedEffects("RGBLoop")}
        >
          <Text style={{ color: "#fff" }}>RGBLoop</Text>
        </Button>
        <Button
          style={styles.btnFog}
          onPress={() => handleLedEffects("Runninglightsblue")}
        >
          <Text style={{ color: "#fff" }}>Running Blue</Text>
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
    width: 0.5 * Dimensions.get("window").width,
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
