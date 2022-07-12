import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PMSText = ({ keyword, value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>{keyword}</Text>
        <Text style={{ fontSize: 20 }}>{value} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
});

export default PMSText;
