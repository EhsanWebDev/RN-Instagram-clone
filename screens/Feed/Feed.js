import React, { Component } from "react";
import { FlatList, Image, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import cons from "expo-constants";
import { DATA } from "../../constants/data";
import FeedItem from "../../components/FeedComponents/FeedItem";

export default class Feed extends Component {
  state = {
    refreshing: false,
  };
  HeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header img={require("../../assets/images/logo_text.png")} />
    </View>
  );
  render() {
    return (
      <FlatList
        ListHeaderComponent={this.HeaderComponent}
        data={DATA}
        renderItem={({ item }) => <FeedItem item={item} />}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, marginTop: cons.statusBarHeight }}
        stickyHeaderIndices={[0]}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: false });
        }}
      />
    );
  }
}
