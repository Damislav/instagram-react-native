import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
