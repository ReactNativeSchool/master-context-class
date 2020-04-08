import React from "react";
import { View, Text, Button } from "react-native";

export default () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Home</Text>
    <Button title="Sign Out" onPress={() => alert("todo!")} />
  </View>
);
