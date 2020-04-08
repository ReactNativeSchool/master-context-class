import React from "react";
import { View, Text, Button } from "react-native";

export default () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Sign In</Text>
    <Button title="Sign In!" onPress={() => alert("todo")} />
  </View>
);
