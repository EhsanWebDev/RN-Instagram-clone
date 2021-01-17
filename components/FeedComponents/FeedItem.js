import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { units } from "../../constants/styles";
import Header from "./Header";
import Likes from "./Likes";
import ReactionBar from "./ReactionBar";

const FeedItem = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <Image source={{ uri: item.image }} style={styles.img_style} />
      <ReactionBar liked={liked} onLike={() => setLiked(!liked)} />
      <Likes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  img_style: {
    width: units.width,
    height: units.height / 2.4,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default FeedItem;
