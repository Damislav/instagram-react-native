import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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
];
const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image style={styles.icon} source={{ uri: icon.inactive }} />
    </TouchableOpacity>
  );
  return (
    <View>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomTabs;
