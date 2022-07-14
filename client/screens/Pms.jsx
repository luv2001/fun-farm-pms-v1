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
  const [pH, setpH] = useState(0);
  const [TDS, setTDS] = useState(0);
  const [DLI, setDLI] = useState(0);

  const [inputMoisture, setInputMoisture] = useState(0);

  const url = "http://192.168.43.75:4000/api/v1/";

  const setValues = (data) => {
    setDate(data[0]);
    setTime(data[1]);
    setMoisture(data[2]);
    setpH(data[3]);
    setTDS(data[4]);
    setDLI(data[5]);
  };

  const handleUpdateData = async () => {
    const { data } = await axios.get(`${url}/getLatestData`);

    setValues(data);
  };

  const handleSendMoisture = async () => {
    const { data } = await axios.get(`${url}/addThroughUrl/${inputMoisture}`);
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
      keyword: "pH",
      value: pH,
    },
    {
      _id: 5,
      keyword: "TDS",
      value: TDS,
    },
    {
      _id: 6,
      keyword: "DLI",
      value: DLI,
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
          width: "70%",
        }}
      >
        <TextInput
          placeholder="moisture"
          onChangeText={setInputMoisture}
        ></TextInput>
        <Button
          color={primaryColor}
          title="Change Moisture"
          onPress={() => handleSendMoisture()}
        />
      </View>

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
              padding: 10,
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
