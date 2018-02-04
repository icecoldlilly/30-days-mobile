import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';


export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  };
  componentWillMount(){
    console.log("Status: Will mount");
    this.setState({
      videoId: this.props.videoId,
      loading: this.props.loading
    })
  }
  componentDidMount() {
    console.log(`Status: Did mount; Play video: ${this.state.videoId}, Loading? ${this.state.loading}`);
  }

  componentWillReceiveProps() {
    console.log("Will receive props");
  }

  WebViewPlayer() {
    return (
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate={"normal"}
        // startInLoadingState={true}
        backButtonEnabled={true}
        forwardButtonEnabled={true}
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
    if(this.state.loading) 
      return (<ActivityIndicator
        size={'large'}
        style={ styles.indicator }/>)
    else if (!this.state.videoId)
      return (<Text
        style={ styles.errorText }>
          Video cannot load
      </Text>)
    else
      return(
        <View style={this.props.style}>
          {this.WebViewPlayer()}
          <Text>
          </Text>
        </View>
      )
  }
}

const styles={
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  erroText: {
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
    flex: 1
  }
}