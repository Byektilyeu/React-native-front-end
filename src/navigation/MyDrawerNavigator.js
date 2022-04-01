import React from "react";

import MyStackNavigator from "./MyStackNavigator.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUpScreen from "../screens/SignUpScreen.js";
import LoginScreen from "../screens/LoginScreen.js";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Нүүр" component={MyStackNavigator} />
    <Drawer.Screen name="Бүртгүүлэх" component={SignUpScreen} />
    <Drawer.Screen name="Логин" component={LoginScreen} />
  </Drawer.Navigator>
);
