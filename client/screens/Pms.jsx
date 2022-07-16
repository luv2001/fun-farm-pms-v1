import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import PMSText from "../components/PMSText";

import axios from "axios";

const Pms = ({ navigation }) => {
  const primaryColor = "#16a0b2";
  //API Calles for PMS

  // PMS Data
  const [date, setDate] = useState("Loading ... ");
  const [time, setTime] = useState("Loading ...");
  const [moisture, setMoisture] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);
  const [LUX, setLUX] = useState(0);

  const [inputMoisture, setInputMoisture] = useState(0);
  const [inputWaterLevel, setInputWaterLevel] = useState(0);
  const [inputLUX, setInputLUX] = useState(0);

  // const IP = "192.168.0.3";
  // const url = `http://${IP}:4000/api/v1`; // Testing URL

  const url = "https://fun-farmhouse.herokuapp.com/api/v1"; //Testing URL :: Deployed Backend

  const setValues = (data) => {
    setDate(data[0]);
    setTime(data[1]);
    setMoisture(data[2]);
    setWaterLevel(data[3]);
    setLUX(data[4]);
  };

  const handleUpdateData = async () => {
    const { data } = await axios.get(`${url}/getLatestPMSdata`);
    setValues(data);
  };

  const handleUpdatePMSData = async () => {
    const { data } = await axios.get(
      `${url}/addPMSdataThroughUrl?moisture=${inputMoisture}&waterLevel=${inputWaterLevel}&LUX=${inputLUX}`
    );
  };

  const pmsData = [
    {
      _id: 1,
      keyword: "Date",
      value: date,
    },
    {
      _id: 2,
      keyword: "Time",
      value: time,
    },
    {
      _id: 3,
      keyword: "Moisture",
      value: moisture,
    },
    {
      _id: 4,
      keyword: "waterLevel",
      value: waterLevel,
    },
    {
      _id: 5,
      keyword: "LUX",
      value: LUX,
    },
  ];

  return (
    <View style={styles.container}>
      {pmsData.map((item, value) => {
        return (
          <PMSText key={item._id} keyword={item.keyword} value={item.value} />
        );
      })}
      <Button
        color={primaryColor}
        title="click"
        onPress={() => handleUpdateData()}
      />
      <Text style={{ marginTop: 20 }}>
        Real Time Update Will be implimented
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignSelf: "center",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 20,
          width: "70%",
        }}
      >
        <TextInput
          // style={{ marginBottom: 30 }}
          placeholder="moisture"
          onChangeText={setInputMoisture}
        ></TextInput>
        <TextInput
          // style={{ marginBottom: 30 }}
          placeholder="water Level"
          onChangeText={setInputWaterLevel}
        ></TextInput>
        <TextInput
          // style={{ marginBottom: 30 }}
          placeholder="LUX"
          onChangeText={setInputLUX}
        ></TextInput>
      </View>
      <Button
        color={primaryColor}
        title="Update"
        onPress={() => handleUpdatePMSData()}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 260,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 20,
          }}
        >
          <Icon
            name="areachart"
            size={35}
            color="#16a0b2"
            onPress={() => navigation.navigate("chartprectise")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          />
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
    paddingTop: 200,
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

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },

  btn: {
    backgroundColor: "#16a0b2",
    color: "white",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    borderRadius: 20,
  },
});

export default Pms;
