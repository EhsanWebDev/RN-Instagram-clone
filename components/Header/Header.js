import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
const Header = ({ img }) => {
  if (img) {
    return (
      <View style={styles.img_header_container}>
        <Image source={img} style={styles.header_img} />
        <View>
          <Feather name="message-circle" size={26} color="black" />
          <View style={styles.badge}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
                fontSize: 12,
                flex: 1,
              }}
            >
              2+
            </Text>
          </View>
        </View>
      </View>
    );
  }
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
  img_header_container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    // marginVertical: 14,
  },
  headerText: {
    fontSize: 22,
    // fontWeight: "bold"
  },
  header_img: {
    height: 50,
    width: 140,
    tintColor: "black",
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    bottom: 16,
    right: -4,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default Header;
