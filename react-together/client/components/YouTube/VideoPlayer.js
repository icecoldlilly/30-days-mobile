import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';


export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    console.log(`Play video: ${this.state.video.id.videoId}, Loading? ${this.state.loading}`);
  }

  componentWillReceiveProps() {
    this.setState({
      videoId: this.props.videoId,
      loading: this.props.loading
    })
  }

  WebViewPlayer() {
    return (
      <WebView
        // style={ styles.WebViewContainer }
        javaScriptEnabled={true}
        domStorageEnabled={true}
        // decelerationRate={"normal"}
        // startInLoadingState={true}
        // backButtonEnabled={true}
        // forwardButtonEnabled={true}
        mixedContentMode ={"always"}
        source={{
          uri: `https://www.youtube.com/embed/${this.state.videoId}?enablejsapi=1`,
          headers: {
            // This will allow playback of restricted videos
            'Referer': 'https://www.youtube.com/',
          }
        }}
      />
    )
  };

  render() {
    if(!this.state.video || this.state.loading) return <ActivityIndicator size={'large'} style={styles.indicator}/>
    return(
      <View>
        {/* <Text> Demo </Text> */}
        {this.WebViewPlayer()}
      </View>
    )
  }
}

const styles={
  // WebViewContainer: {
  //   marginTop: (Platform.OS == 'ios') ? 0 : 0, 
  // },
  // indicator: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flex: 3,
  // },
}