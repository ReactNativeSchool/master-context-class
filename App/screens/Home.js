import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../util/AuthManager";

export default () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};
