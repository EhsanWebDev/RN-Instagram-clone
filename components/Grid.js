import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";

const Grid = ({ uri, DATA }) => {
  const _renderItem = ({ item }) => (
    <View style={{ flex: 1, marginBottom: 2 }}>
      <Image
        style={{ width: "100%", height: 160 }}
        source={{ uri: item.image }}
        resizeMode="cover"
      />
    </View>
  );
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={{ flex: 1, marginTop: 15 }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 5,
  },
  imgStyle: {
    width: "100%",
    height: 140,
  },
});
export default Grid;
