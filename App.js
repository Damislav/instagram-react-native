import { StyleSheet, View } from "react-native";
import SignedInStack from "./navigation";
import React from "react";

export default function App() {
  return <SignedInStack />;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
});
