import React from "react";
import { TextInput, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <FontAwesome
        name="search"
        size={24}
        color="black"
        style={{ paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#E0E0E0"
        style={{ flex: 1, fontSize: 20 }}
      />
      <AntDesign
        name="scan1"
        size={30}
        color="black"
        style={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default SearchBar;
