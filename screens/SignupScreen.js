import { View, StyleSheet, Image } from "react-native";

import React from "react";
import SignupForm from "../components/signupScreen/SignupForm";

const instaLogo =
  "https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png";

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        style={{ height: 100, width: 100 }}
        source={{
          uri: instaLogo,
        }}
      />
    </View>
    <SignupForm navigation={navigation} />
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
export default SignupScreen;
