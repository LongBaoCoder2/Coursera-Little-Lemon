import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SubscribeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapperImage} activeOpacity={0.7}>
        <Image
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.message}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: 100,
            letterSpacing: 10,
          }}
        >
          Subcribe to our newsletter for our latest delicous recipes
        </Text>
      </View>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperImage: {
    padding: 20,
  },
  image: { width: 100, height: 100 },
  message: {
    padding: 10,
  },
});
