import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/ios-filled/50/ffffff/home-page.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/home-page.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/50/ffffff/search-more.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/search-more.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/movie.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/movie.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/ios-filled/50/ffffff/shop.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/shop.png",
  },
  {
    name: "Profile",
    active: "https://img.icons8.com/ios-filled/50/ffffff/logo.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/logo.png",
  },
];
const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        style={[
          styles.icon,
          // icon.name === "Profile" ? styles.profilePic() : null,
          // activeTab === "Profile" && icon.name === activeTab
          //   ? styles.profilePic(activeTab)
          //   : null,
        ]}
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider
        style={{ color: "white", backgroundColor: "grey" }}
        width={1}
        orientation="vertical"
      />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
    bottom: "0",

    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderColor: activeTab === Profile ? 2 : 0,
  }),
});

export default BottomTabs;
