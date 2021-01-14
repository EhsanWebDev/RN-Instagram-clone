import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  Feather,
  AntDesign,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";

const ReactionBar = ({ liked, onLike }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <AntDesign
          name={liked ? "heart" : "hearto"}
          size={24}
          color={liked ? "red" : "black"}
          onPress={onLike}
        />
        <Feather
          name="message-circle"
          size={24}
          color="black"
          style={styles.icon}
        />
        <SimpleLineIcons
          name="paper-plane"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
      <FontAwesome name="bookmark-o" size={24} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    marginVertical: 10,
  },
  icon: {
    marginLeft: 8,
  },
});
export default ReactionBar;
