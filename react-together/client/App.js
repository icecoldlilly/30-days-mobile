import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
export default class App extends Component {
  onPressNewPage(pageName) {
    alert(`Opened ${pageName}`)
  }
  render() {
    return (
      <View style={styles.container}>
        <Button text="Messenger" onPress={() => this.onPressNewPage("Messenger")} />
        <Button text="YouTube" onPress={() => this.onPressNewPage("YouTube")} />
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
