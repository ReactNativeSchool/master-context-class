import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "./screens/Splash";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import Home from "./screens/Home";

const BottomTabs = createBottomTabNavigator();
const Tabs = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="Home" component={Home} />
    <BottomTabs.Screen name="Profile" component={Profile} />
  </BottomTabs.Navigator>
);

const AuthStack = createStackNavigator();
const Auth = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

const AppStack = createStackNavigator();
const App = () => {
  return <Splash />;

  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Auth" component={Auth} />
      <AppStack.Screen name="Tabs" component={Tabs} />
    </AppStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);
