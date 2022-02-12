import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
};
const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri: "https://img.icons8.com/ios/50/ffffff/circled-left-2.png",
          }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: "10",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
