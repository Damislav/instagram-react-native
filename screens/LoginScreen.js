import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";
const instaLogo =
  "https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png";

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        style={{ height: 100, width: 100 }}
        source={{
          uri: instaLogo,
        }}
      />
    </View>
    <LoginForm />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: { alignItems: "center", marginTop: 60 },
});
export default LoginScreen;
