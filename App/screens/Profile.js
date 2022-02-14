import React, { useContext } from "react";
import { View, Text } from "react-native";

import { AuthContext } from "../util/AuthManager";

export default () => {
  const { user } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
      <Text>{user?.name}</Text>
    </View>
  );
};
