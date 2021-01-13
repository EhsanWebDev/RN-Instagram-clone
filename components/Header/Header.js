import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-arrow-back" size={30} color="grey" />
      <Text style={styles.headerText}>instagram</Text>
      <MaterialCommunityIcons name="dots-horizontal" size={30} color="grey" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 22,
    // fontWeight: "bold"
  },
});
export default Header;
