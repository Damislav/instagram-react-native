import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import firebase from "../../firebase";
const SignupForm = ({ navigation }) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),

    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 8 characthere"),
  });
  const onSignup = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("user created succesefully");
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        validationSchema={SignupFormSchema}
        onSubmit={(values) => onSignup(values.email, values.password)}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => {
          return (
            <>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#444"
                  placeholder="Phone number,username or email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.username.length || values.username.length > 6
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#444"
                  placeholder="Username"
                  autoCapitalize="none"
                  autoConnect={false}
                  textContentType="username"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
              </View>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length > 6
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#444"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoConnect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>
              <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
                <Text style={{ color: "#6bb0f5" }}>Forgot password</Text>
              </View>
              <Pressable
                titleSize={20}
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}> Register </Text>
              </Pressable>
              <View style={styles.signupContainer}>
                <Text>You have an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={{ color: "#6bb0f5" }}> Log in</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#0096f6",
    alignItems: "center",
    minHeight: 42,
    borderRadius: 4,
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default SignupForm;
