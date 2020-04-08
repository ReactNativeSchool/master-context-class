import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "./screens/Splash";
import SignIn from "./screens/SignIn";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import { AuthContext, AuthContextProvider } from "./util/AuthManager";

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
  const { checkedAuth, isSignedIn } = useContext(AuthContext);

  if (!checkedAuth) {
    return <Splash />;
  }

  return (
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
  );
};

export default () => (
  <NavigationContainer>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </NavigationContainer>
);
