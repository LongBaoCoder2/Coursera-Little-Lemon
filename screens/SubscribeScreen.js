import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const handleInput = (e) => {
    setEmail(e);
    const parseEmail = validateEmail(e);
    setIsValidEmail(parseEmail ? true : false);
  };

  const handleSubmit = () => {
    if (!isValidEmail) {
      return;
    }

    Alert.alert("Thanks", "Thanks for subcribing us, stay tuned!");
  };

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
            fontSize: 22,
            textAlign: "center",
          }}
        >
          Subcribe to our newsletter for our latest delicous recipes
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Type your email"
          value={email}
          onChangeText={handleInput}
          style={styles.inputEmail}
        />
        <TouchableOpacity
          style={{
            ...styles.subcribeBtn,
            backgroundColor: isValidEmail ? "#40524c" : "#b7b7b7",
          }}
          activeOpacity={0.5}
          onPress={handleSubmit}
          disabled={!isValidEmail}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
            Subcribe
          </Text>
        </TouchableOpacity>
        {/* <Button title="Subcribe" disabled style={styles.subcribeBtn} /> */}
      </View>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperImage: {
    marginTop: 10,
    padding: 20,
  },
  image: { width: 100, height: 100 },
  message: {
    padding: 15,
  },
  inputEmail: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#ccc",
    width: 300,
    borderRadius: 8,
  },
  subcribeBtn: {
    width: 300,
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 20,
  },
});
