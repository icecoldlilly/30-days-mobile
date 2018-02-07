import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// implemented following solution to onMessage problem:
// https://github.com/facebook/react-native/issues/10865#issuecomment-358248948
const injectedScript = () => {
  window.postMessage(document.body.innerHTML);
  window.postMessage = window.originalPostMessage || window.postMessage;
}
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
        ref={webview => this.webview = webview}
        injectedJavaScript={`(${String(injectedScript)})()`}
        onMessage={message => console.log(message)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate={"normal"}
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