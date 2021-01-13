import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Count = ({ count, category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  counter: {
    fontSize: 24,
    fontWeight: "bold",
  },
  category: {
    fontSize: 18,

    color: "grey",
  },
});
export default Count;
