import React from "react";
import { StyleSheet, View, Text } from "react-native";

// import { Container } from './styles';

const Badge = () => {
  return (
    <View style={styles.badge}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          alignSelf: "center",
          fontSize: 12,
          flex: 1,
        }}
      >
        2+
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    bottom: 16,
    right: -4,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default Badge;
