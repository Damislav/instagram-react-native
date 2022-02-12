import { View, Text, TextInput, Image, Button } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import validUrl from "valid-url";
const placeholderImg =
  "https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A url is required"),
  caption: Yup.string().max(2200, "Caption has reacthed character"),
});
const FormikPostUploader = ({ navigation }) => {
  const [thumbnail, setThumbnail] = useState(placeholderImg);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      validationSchema={uploadPostSchema}
      onSubmit={(values) => {
        console.log(values);
        console.log("Your post was submitted successfully");
        navigation.goBack();
      }}
      initialValues={{ caption: "", imageUrl: "" }}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: validUrl.isUri(thumbnail) ? thumbnail : placeholderImg,
              }}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Write a caption"
                multiline={true}
                style={{ fontSize: 20, color: "white" }}
                onBlur={handleBlur("caption")}
                onChangeText={handleChange("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider
            style={{ alignSelf: "stretch", backgroundColor: "#ddd" }}
            width={1}
            orientation="vertical"
          />
          <TextInput
            onChange={(e) => setThumbnail(e.nativeEvent.text)}
            style={{ fontSize: 18, color: "white" }}
            style={{ color: "white" }}
            placeholderTextColor="gray"
            placeholder="Enter image url"
            onBlur={handleBlur("imageUrl")}
            onChangeText={handleChange("imageUrl")}
            values={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button disabled={!isValid} onPress={handleSubmit} title="Share">
            Submit
          </Button>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
