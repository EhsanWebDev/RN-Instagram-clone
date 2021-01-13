import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
const Count = ({ icon, stylesProp }) => {
  return (
    <TouchableOpacity style={[styles.primary_btn, stylesProp]}>
      {icon && <AntDesign name="down" size={20} color="white" />}
      {!icon && <Text style={styles.btn_text}>Follow</Text>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  primary_btn: {
    backgroundColor: "#0673E7",
    padding: 4,
  },
  btn_text: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default Count;
