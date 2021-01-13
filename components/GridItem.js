import React from "react";
import { Image, View } from "react-native";

// import { Container } from './styles';

const GridItem = ({ item }) => (
  <View style={{ flex: 1, marginBottom: 2 }}>
    <Image
      style={{ width: "100%", height: 160 }}
      source={{ uri: item.image }}
      resizeMode="cover"
    />
  </View>
);

export default GridItem;
