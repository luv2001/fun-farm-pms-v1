import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";

import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
} from "victory-native";
import { Button } from "react-native-paper";
import axios from "axios";

const url = "http://192.168.0.2:4000/api/v1/";

const data = [
  {
    month: 1,
    earnings: 131,
  },
  {
    month: 2,
    earnings: 312,
  },
  {
    month: 3,
    earnings: 145,
  },
  {
    month: 4,
    earnings: 23,
  },
  {
    month: 5,
    earnings: 453,
  },
  {
    month: 6,
    earnings: 100,
  },
];

const ChartPrectise = () => {
  const [graphData, setGraphData] = useState([{}]);

  const handleMoistureTimeGraphData = async () => {
    const { data } = await axios.get(`${url}/getMoistureTime`);

    setGraphData(data);
    console.log(graphData);
  };
  return (
    <View style={styles.container}>
      <Text>Moisture / Time</Text>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          // interpolation="natural"
          animate
          data={data}
          x="month"
          y="earnings"
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
      {/* <Button onPress={handleMoistureTimeGraphData}>
        <Text>Get Data</Text>
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChartPrectise;
