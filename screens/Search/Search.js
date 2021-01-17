import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import cons from "expo-constants";
import SearchBar from "../../components/SearchBar";
import Pill from "../../components/Pill";
import Avatar from "../../components/Avatar";
export default class Search extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchBar />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 10 }}
        >
          <Pill />
          <Pill icon={"shopping"} text={"Shop"} />
          <Pill icon={"home-assistant"} text={"Decor"} />
          <Pill />
          <Pill />
          <Pill />
        </ScrollView>

        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: cons.statusBarHeight,
  },
});
