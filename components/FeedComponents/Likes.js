import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Likes = () => {
  return (
    <View
      style={{
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      }}
    >
      <AntDesign name={"heart"} size={16} color={"black"} />
      <Text
        style={{
          flex: 1,
          marginLeft: 4,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        4,820 likes
      </Text>
    </View>
  );
};

export default Likes;
