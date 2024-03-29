import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./screens/SignupScreen";
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="LoginScreen"
    >
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default SignedInStack;
