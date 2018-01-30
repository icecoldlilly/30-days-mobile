import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform } from 'react-native';
// import YouTube from 'react-native-youtube';

/* 
  TODO: ✍🏽 Add video player here
   */

export default class PlayerUI extends Component {
  constructor(props) {
    super(props);
    this.playThis = props.playThis
  }

  componentWillMount() {
    this.setState({
      videoId: this.playThis
    })
  }

  render(){
    console.log(`Play video: ${this.state.videoId}`);
    return (
      
      // Use WebView
      <View style={{ height: 300 }}>
        <WebView
                style={ styles.WebViewContainer }
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri: `https://www.youtube.com/embed/${this.state.videoId}` }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: (Platform.OS == 'ios') ? 0 : 0,
  }
});