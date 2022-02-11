import React from "react";
import { View, StyleSheet, ScrollView } from "react-native-web";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
