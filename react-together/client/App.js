import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  onPressOpenChat() {
    console.log("Open Chat Please")
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Chat!" onPress={() => this.onPressOpenChat()} />
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
