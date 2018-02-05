import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';


export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      isVideoVisible: false,
      isWebviewLoaded: false,
      loading: true
    }
  };
  componentWillMount(){
    console.log("Status: Will mount");
    this.setState({
      videoId: this.props.videoId,
      // loading: this.props.loading
    })
  }
  componentDidMount() {
    console.log(`Status: Did mount; Play video: ${this.state.videoId}, Loading? ${this.state.loading}`);
  }

  componentWillReceiveProps() {
    console.log("Will receive props");
  }

  onMessage = (e) => {
    console.log('GOT MESSAGE', e.nativeEvent.data);
}

/**
 * Send message from native app to web view
 */
postMessage = (message) => {
    if (this.webview && this.state.isWebviewLoaded) { this.webview.postMessage(message, '*'); }
}


  WebViewPlayer() {
    return (
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate={"normal"}
        ref={ (webview) => { return this.webview = webview; } }
        automaticallyAdjustContentInsets={true}
        backButtonEnabled={true}
        forwardButtonEnabled={true}
        startInLoadingState={true}
        backButtonEnabled={true}
        forwardButtonEnabled={true}
        scalesPageToFit={true}
        source={{
          uri: `https://www.youtube.com/embed/${this.state.videoId}?enablejsapi=1`,
          headers: {
            // This will allow playback of restricted videos
            'Referer': 'https://www.youtube.com/',
          }
        }}
        onNavigationStateChange = {(navState) => {
          console.log('Nav changed', navState);
          // NOTE: This doesn't actually work because youtube is a single page app and does not trigger nav state changes.
          this.setState({
              backButtonEnabled: navState.canGoBack,
              forwardButtonEnabled: navState.canGoForward,
              status: navState.title,
              loading: navState.loading,
              scalesPageToFit: true
          });
      }}
        onError={(err) => { console.log("ERROR", err); }}
        onLoad={() => { console.log("Load..."); }}
        
        onLoadEnd={() => {
            console.log("Load End", this.webview);
            this.webview.injectJavaScript(
                '(' + youtubeClientCode.toString() + ')()'
            );
            this.setState({isWebviewLoaded: true});
        }}
      />
    )
  };

  render() {
    // if(this.state.loading) 
      return (<ActivityIndicator
        size={'large'}
        style={ styles.indicator }/>)
    if (!this.state.videoId)
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