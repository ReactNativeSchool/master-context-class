import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "./screens/Splash";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import { AuthContext } from "./util/AuthManager";

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
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCheckedAuth(true);
      setSignedIn(Math.random() < 0.5);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const signIn = () => {
    setSignedIn(true);
  };
  const signOut = () => {
    setSignedIn(false);
  };

  if (!checkedAuth) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
      >
        {isSignedIn ? (
          <AppStack.Screen name="Tabs" component={Tabs} />
        ) : (
          <AppStack.Screen name="Auth" component={Auth} />
        )}
      </AppStack.Navigator>
    </AuthContext.Provider>
  );
};

export default () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);
