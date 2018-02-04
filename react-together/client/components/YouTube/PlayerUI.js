import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { VideoSync } from '../../apis/sockets/videosync'
import { YouTube } from 'react-youtube';
/* 
  TODO: ✍🏽 Fix UI to match
   */

export default class PlayerUI extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.video.snippet.title}`,
  });
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: false,
    };
  };
  onYouTubeIframeAPIReady = () => {
    console.log("setting out player")
    this.state.player = new YT.Player('player', {
      events: {
        'onStateChange': onPlayerStateChange()
      }
    });
  };

  onPlayerStateChange = () => {
    console.log("State changed");
  };

  setupSharing(){
    var userId = `user${Math.random().toString()}`
    var vidSync = VideoSync("testRoom", userId )
    this.setState({
      userId: userId,
      vidSync: vidSync,
      typeShare: 'host'
    })
  }
  hostSharing(){
    this.setState({
      typeShare: 'host'
    })
  }
  clientSharing(){
    this.setState({
      typeShare: 'client'
    })

  }
  stopSharing(){
    this.setState({
      userId: null,
      vidSync: null,
      typeShare: null,
    })

  }
  componentWillMount() {
// Update compon
    this.setState({
      video: this.props.navigation.state.params.video,
      loading: this.props.navigation.state.params.loading
    })
  }

  componentDidMount() {
    console.log(`Play video: ${this.state.video.id.videoId}, Loading? ${this.state.loading}`);
  }

  WebViewPlayer() {
    return (
      <WebView id={"player"}
        style={ styles.WebViewContainer }
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode ={"always"}
        onLoadEnd={() => this.onYouTubeIframeAPIReady()}
        source={{
          uri: `https://www.youtube.com/embed/${this.state.video.id.videoId}?enablejsapi=1`,
          headers: {
            // This will allow playback of restricted videos
            'Referer': 'https://www.youtube.com/',
          }
        }}
      />
    )
  }
  iFramePlayer(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return(
      <YouTube
      videoId={this.state.video.id.videoId}
      opts={opts}
      onReady={() => {console.log("Player ready")}}
    />)
  }  

  render(){
    const { navigate } = this.props.navigation;
    if(!this.state.video || this.state.loading) return <ActivityIndicator size={'large'} style={styles.indicator}/>
    return (
      // Use WebView
      <View style={styles.container}>
        <View style={{ height: 300 }} >
          {/* {this.WebViewPlayer()} */}
          {this.iFramePlayer()}
        </View>
        <Button style={{ marginTop: '10%' }}
        large
        text='Watch Together'
        icon={ <Icon name="plus-square" color="white" type="font-awesome" /> }
        buttonStyle={{backgroundColor: '#fc8027', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        onPress={() => navigate('YouTube')} />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  WebViewContainer: {
    marginTop: (Platform.OS == 'ios') ? 0 : 0, 
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
});