import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

export default class YouTubeScreen extends Component {
  static navigationOptions = {
    title: 'YouTube',
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> YouTube Screen will be here </Text>
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