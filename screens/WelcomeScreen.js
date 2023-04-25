import * as React from "react";
import { View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image source={require("../assets/little-lemon-logo.png")} />
    </View>
  );
};

export default WelcomeScreen;
