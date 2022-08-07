import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Login from "./screens/Login.js";
import Pms from "./screens/MWL";
import Led from "./screens/Led";
import Fog from "./screens/Fog";
import Nutrition from "./screens/Nutrition";
import PMSChart from "./screens/PMSChart";
import ChartPrectise from "./screens/PMSChart";
import Register from "./screens/Register";
import ColorPickerScreen from "./screens/ColorPicker";
import LEDEffects from "./screens/LEDEffects";
import MWL from "./screens/MWL";
import PMS from "./screens/Pms";
import pHTDS from "./screens/pHTDS";
// import Footer from "./components/Footer";
// import Profile from "./screens/Profile";
// import Register from "./screens/Register";
// import Pms from "./screens/Pms";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pms"
          component={PMS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="phtds"
          component={pHTDS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mwl"
          component={MWL}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="colorpicker"
          component={ColorPickerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="led"
          component={Led}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="fog"
          component={Fog}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="nutrition"
          component={Nutrition}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pmschart"
          component={PMSChart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chartprectise"
          component={ChartPrectise}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ledeffects"
          component={LEDEffects}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
