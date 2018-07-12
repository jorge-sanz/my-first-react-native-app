import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bananas from './src/components/Bananas';
import LotsOfGreetings from './src/components/LotsOfGreetings';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Bananas></Bananas>
        <LotsOfGreetings></LotsOfGreetings>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
