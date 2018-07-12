import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Bananas from "./src/components/Bananas";
import LotsOfGreetings from "./src/components/LotsOfGreetings";
import BlinkTextLabels from "./src/components/BlinkTextLabels";
import LotsOfStyles from "./src/components/LotsOfStyles";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Bananas />
        <LotsOfGreetings />
        <BlinkTextLabels />
        <LotsOfStyles />
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
