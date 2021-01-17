import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Container } from './styles';

const Pill = ({ icon, text = "IGTV" }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",

        borderColor: "#E6E6E6",
        borderWidth: 2,
        padding: 4,
        alignItems: "center",
        marginHorizontal: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
      }}
    >
      <MaterialCommunityIcons
        name={icon ? icon : "youtube-tv"}
        size={24}
        color="#262626"
        style={{ paddingRight: 4 }}
      />
      <Text style={{ color: "#262626", fontWeight: "bold", fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Pill;
