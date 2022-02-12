import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/instagram.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-plus-math-50.png")}
          />{" "}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-heart-64.png")}
          />{" "}
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-facebook-messenger-50.png")}
          />{" "}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    color: "white",
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    color: "white",
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 20,
    bottom: 19,
    width: 25,
    height: 18,
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "#ffff",
    fontWeight: "600",
  },
});

export default Header;
