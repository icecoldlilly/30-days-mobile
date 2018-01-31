import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import PlayerUI from '../components/YouTube/PlayerUI';
import VideoListUI from '../components/YouTube/VideoListUI';
import SearchBar from '../components/common/SearchBar';
import Api       from '../apis/youtube/Search'

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