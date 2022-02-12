import { View, Text } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <AddNewPost navigation={navigation} />
      <Text>NewPostScreen</Text>
    </View>
  );
};

export default NewPostScreen;
