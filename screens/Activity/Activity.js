import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { sizes } from "../../constants/styles";
import cons from "expo-constants";
import ActivityItem from "../../components/Activity/ActivityItem";
export default class Activity extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: cons.statusBarHeight }}>
        <Header activity />
        <Text
          style={{
            paddingHorizontal: sizes.padding_md,
            fontSize: sizes.font_h2,
            fontWeight: "bold",
          }}
        >
          New
        </Text>
        <View style={{ marginTop: 10 }}>
          <ActivityItem post />
        </View>
        <View style={{ marginTop: 10 }}>
          <ActivityItem follow />
        </View>
        <View style={{ marginTop: 10 }}>
          <ActivityItem follow following />
        </View>

        <Text
          style={{
            paddingHorizontal: sizes.padding_md,
            fontSize: sizes.font_h2,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Recent
        </Text>
        <View style={{ marginTop: 10 }}>
          <ActivityItem follow />
        </View>
        <View style={{ marginTop: 10 }}>
          <ActivityItem follow following />
        </View>
        <View style={{ marginTop: 10 }}>
          <ActivityItem post />
        </View>
      </ScrollView>
    );
  }
}
