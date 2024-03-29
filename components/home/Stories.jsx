import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import { ScrollView } from "react-native-web";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View style={{ alignItems: "center" }} key={index}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
