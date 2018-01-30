import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import PlayerUI from '../components/YouTube/PlayerUI';

export default class YouTubeScreen extends Component {
  static navigationOptions = {
    title: 'YouTube',
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <PlayerUI playThis="KVZ-P-ZI6W4"/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});