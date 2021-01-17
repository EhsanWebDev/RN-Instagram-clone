import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Activity from "./screens/Activity/Activity";
import Feed from "./screens/Feed/Feed";
import Profile from "./screens/Profile/Profile";
import Search from "./screens/Search/Search";

export default function App() {
  return <Search />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
