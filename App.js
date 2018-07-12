import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Bananas from "./src/components/Bananas";
import LotsOfGreetings from "./src/components/LotsOfGreetings";
import BlinkTextLabels from "./src/components/BlinkTextLabels";
import LotsOfStyles from "./src/components/LotsOfStyles";
import FixedDimensionsBasics from "./src/components/FixedDimensionsBasics";
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
