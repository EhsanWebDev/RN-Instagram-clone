import React from "react";
import { Text } from "react-native";

// import { Container } from './styles';

const Text1 = ({ text, h1, h2, h3, p }) => {
  let styles = {};
  styles = h1 && { fontSize: 18 };
  return <Text style={styles}> {text} </Text>;
};

export default Text1;
