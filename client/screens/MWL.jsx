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
import { getLatestMWLData } from "./actions/MWLActions";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getLatestMWLData } from "../actions/MWLActions";

const MWL = ({ navigation }) => {
  // DONE : Impliment redux
  // TODO : Implement asyncStorage

  const { loading, MWLData, error } = useSelector((state) => state.mwl);

  // Logged In User Id
  const id = "62daccb734cfb32b26688bd6";

  const primaryColor = "#16a0b2";

  const dispatch = useDispatch();

  const MWLDataLoading = [
    {
      _id: 1,
      keyword: "Date",
      value: "Loading .. ",
    },
    {
      _id: 2,
      keyword: "Time",
      value: "Loading .. ",
    },
    {
      _id: 3,
      keyword: "Moisture",
      value: "Loading .. ",
    },
    {
      _id: 4,
      keyword: "waterLevel",
      value: "Loading .. ",
    },
    {
      _id: 5,
      keyword: "LUX",
      value: "Loading .. ",
    },
  ];

  const MWLDataFeatched = [
    {
      _id: 1,
      keyword: "Date",
      value: MWLData ? MWLData[0] : "Loading ... ",
    },
    {
      _id: 2,
      keyword: "Time",
      value: MWLData ? MWLData[1] : "Loading ... ",
    },
    {
      _id: 3,
      keyword: "Moisture",
      value: MWLData ? MWLData[2] : "Loading ... ",
    },
    {
      _id: 4,
      keyword: "waterLevel",
      value: MWLData ? MWLData[3] : "Loading ... ",
    },
    {
      _id: 5,
      keyword: "LUX",
      value: MWLData ? MWLData[4] : "Loading ... ",
    },
  ];

  const handleRefresh = () => {
    dispatch(getLatestMWLData("123412341234"));
  };

  return (
    <>
      <Button style={styles.refreshButton}>
        <Text style={{ color: "white" }} onPress={() => handleRefresh}>
          Refresh
        </Text>
      </Button>
      {loading ? (
        <>
          <View style={styles.container}>
            {MWLDataLoading.map((item, value) => {
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
                marginTop: 400,
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
        </>
      ) : (
        <>
          <View style={styles.container}>
            {MWLDataFeatched.map((item, value) => {
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
                marginTop: 400,
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
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    paddingTop: 160,
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
