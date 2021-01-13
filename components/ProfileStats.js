import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Count from "./Count";
import Button from "./Button";
const ProfileStats = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/dp.jpg")}
        style={styles.imgStyle}
      />
      <View style={styles.statContainer}>
        <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
          <Count count={(4, 976)} category={"posts"} />
          <Count count={"2.1M"} category={"followers"} />
          <Count count={"2K"} category={"following"} />
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
          <Button stylesProp={{ flex: 1, marginRight: 5 }} />
          <Button icon={true} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  statContainer: {
    flex: 1,
  },
  imgStyle: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
export default ProfileStats;
