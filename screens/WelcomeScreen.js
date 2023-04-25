import * as React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
      />

      <View>
        <Text style={{ fontSize: 22, textAlign: "center" }}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Subcribe")}
      >
        <Text style={{ fontSize: 16, color: "#fff", textAlign: "center" }}>
          Newsletter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    flex: 0.8,
  },
  image: {
    width: 165,
    height: 165,
    resizeMode: "contain",
    marginBottom: 30,
  },
  button: {
    position: "absolute",
    width: 300,
    padding: 10,
    backgroundColor: "#40524c",
    borderRadius: 5,
    bottom: -100,
  },
});
