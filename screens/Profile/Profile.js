import React, { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import ProfileStats from "../../components/ProfileStats";
import cons from "expo-constants";
import ProfileDesc from "../../components/ProfileDesc";

import { DATA } from "../../constants/data";
import GridItem from "../../components/GridItem";

export default class Profile extends Component {
  HeaderComponent = () => (
    <>
      <Header />
      <ProfileStats />
      <ProfileDesc />
    </>
  );
  render() {
    return (
      <FlatList
        ListHeaderComponent={this.HeaderComponent}
        data={DATA}
        renderItem={({ item }) => <GridItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={{ flex: 1, marginTop: cons.statusBarHeight }}
      />
    );
  }
}
