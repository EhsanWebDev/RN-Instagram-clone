import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Avatar from "../Avatar";
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img_uploader}>
        <Avatar sm />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Mr X </Text>
          <Text style={{ fontSize: 12 }}>Nankana Sahib, Pakistan </Text>
        </View>
      </View>
      <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  img_uploader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Header;
