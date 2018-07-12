import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FlexDimensionsBasics from "./src/components/FlexDimensionsBasics";

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlexDimensionsBasics style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
