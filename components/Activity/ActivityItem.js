import React from "react";
import { Text, View } from "react-native";
import { sizes } from "../../constants/styles";
import Avatar from "../Avatar";
import Button from "../Button";
// import { Container } from './styles';

const ActivityItem = ({ follow, post, styles, following }) => {
  return (
    <View
      style={{
        paddingHorizontal: sizes.padding_sm * 1.2,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

        ...styles,
      }}
    >
      <Avatar sm rounded />

      <Text style={{ flex: 1, paddingHorizontal: 8 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Golu
        </Text>{" "}
        {follow ? " started following you." : "liked your post"}{" "}
        <Text style={{ color: "#CCCCCC" }}>2h</Text>
      </Text>
      {follow && (
        <Button
          stylesProp={{
            paddingHorizontal: 25,
            paddingVertical: 5,
            backgroundColor: "#4399E4",
            borderRadius: 6,
            fontWeight: "100",
          }}
          following={following}
        />
      )}
      {post && <Avatar sm />}
    </View>
  );
};

export default ActivityItem;
