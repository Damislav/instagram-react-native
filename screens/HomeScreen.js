import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native-web";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.collectionGroup("posts").onSnapshot((snapshot) =>
      console.log(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
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
    backgroundColor: "black",
  },
});
export default HomeScreen;
