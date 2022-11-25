import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import PMSText from "../components/PMSText";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getLatestpHTDS } from "../actions/pHTDSActions";

const MWL = ({ navigation }) => {
  // DONE : Impliment redux
  // TODO : Implement asyncStorage

  const { error, loading, pHTDSData } = useSelector((state) => state.phTDS);

  // Logged In User Id
  // const id = "62daccb734cfb32b26688bd6";
  const dispatch = useDispatch();

  // Primary Color ==> Todo : Replacing with Global
  const primaryColor = "#16a0b2";

  // pHTDS  Data
  const [date, setDate] = useState("Loading ... ");
  const [time, setTime] = useState("Loading ...");
  const [pH, setpH] = useState(0);
  const [TDS, setTDS] = useState(0);

  const pmsDataLoading = [
    {
      _id: 1,
      keyword: "Date",
      value: "Loading ... ",
    },
    {
      _id: 2,
      keyword: "Time",
      value: "Loading ... ",
    },
    {
      _id: 3,
      keyword: "pH",
      value: "Loading ... ",
    },
    {
      _id: 4,
      keyword: "TDS",
      value: "Loading ... ",
    },
  ];

  // const handleLatestData = () => {
  //   dispatch(getLatestpHTDS("62daccb734cfb32b26688bd6"));
  // };

  const pmsData = [
    {
      _id: 1,
      keyword: "Date",
      value: pHTDSData[0],
    },
    {
      _id: 2,
      keyword: "Time",
      value: pHTDSData[1],
    },
    {
      _id: 3,
      keyword: "pH",
      value: pHTDSData[2],
    },
    {
      _id: 4,
      keyword: "TDS",
      value: pHTDSData[3],
    },
  ];

  const handleRefresh = () => {
    dispatch(getLatestpHTDS("123412341234"));
  };

  return (
    <>
      <Button style={styles.refreshButton} onPress={handleRefresh}>
        <Text style={{ color: "white" }}>Refresh</Text>
      </Button>
      {loading ? (
        <View style={styles.container}>
          {pmsDataLoading.map((item, value) => {
            return (
              <PMSText
                key={item._id}
                keyword={item.keyword}
                value={item.value}
              />
            );
          })}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 420,
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
      ) : (
        <View style={styles.container}>
          {pmsData.map((item, value) => {
            return (
              <PMSText
                key={item._id}
                keyword={item.keyword}
                value={item.value}
              />
            );
          })}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 420,
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
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    paddingTop: 110,
  },

  refreshButton: {
    backgroundColor: "#16a0b2",
    color: "white",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "70%",
    borderRadius: 20,
    marginTop: 100,
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

export default MWL;
