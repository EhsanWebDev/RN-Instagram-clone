import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/colors";
const ProfileDesc = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Ehsan Ahmad</Text>
        <AntDesign name="checkcircle" size={18} color={colors.primary} />
      </View>
      <Text style={styles.desc}>
        My Day : 2-2-1993 😍 ,{"\n"}BSCS 👉 COMSATS ✌ , Lahore {"\n"}Bio:It is
        a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.Lorem Ipsum is that it has
        a more-or-less.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
  },
  desc: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "justify",
  },
});
export default ProfileDesc;
