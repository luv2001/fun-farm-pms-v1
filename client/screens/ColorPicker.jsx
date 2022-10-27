import { View, Text, StyleSheet } from "react-native";
import React from "react";

import ColorPicker from "react-native-wheel-color-picker";

import { useFormik } from "formik";
import { Picker } from "@react-native-community/picker";
import { Button } from "react-native-paper";

const ColorPickerScreen = () => {
  const colors = [
    { name: "rgb(1,2,3)", id: 1 },
    { name: "rgb(13,23,31)", id: 2 },
    { name: "rgb(123,231,33)", id: 3 },
    { name: "rgb(123,32,33)", id: 4 },
    { name: "rgb(1312,22,33)", id: 5 },
  ];

  const handleFog = () => {};

  const formik = useFormik({
    initialValues: { city_name: "" },
    //formik has onSubmit function
  });

  const handleColorAlert = (color) => {
    //string from color[1] to color[6]
    const colorString =
      color[1] + color[2] + color[3] + color[4] + color[5] + color[6];

    const aRgbHex = colorString.match(/.{1,2}/g);
    const aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];

    // alert(aRgb);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "70%", height: "60%", marginTop: 100 }}>
        <ColorPicker
          style={{ flex: 1 }}
          thumbSize={20}
          onColorChangeComplete={(color) => handleColorAlert(color)}
        />

        {/* <View style={{ height: "50%", marginTop: 200 }}>
          <Picker
            enabled={true}
            mode="dropdown"
            placeholder="Select City"
            onValueChange={formik.handleChange("city_name")}
            selectedValue={formik.values.city_name}
          >
            {colors.map((item) => {
              return (
                <Picker.Item
                  label={item.name.toString()}
                  value={item.name.toString()}
                  key={item.id.toString()}
                />
              );
            })}
          </Picker>

          <Button mode="contained" title="submit" onPress={formik.handleSubmit}>
            Enter
          </Button>
        </View> */}
      </View>
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
    width: "100%",
    borderRadius: 20,
  },
});

export default ColorPickerScreen;
