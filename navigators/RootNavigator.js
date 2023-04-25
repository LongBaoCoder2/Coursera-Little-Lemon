import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Subcribe">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subcribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
