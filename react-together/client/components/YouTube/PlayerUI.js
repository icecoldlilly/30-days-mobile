import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { VideoSync } from '../../apis/sockets/videosync';
import VideoPlayer from './VideoPlayer'
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

  componentWillMount() {
    // Update compon
        this.setState({
          video: this.props.navigation.state.params.video,
          loading: this.props.navigation.state.params.loading
        })
      }
    

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



  render(){
    const { navigate } = this.props.navigation;
    return (
      // Use WebView
      <View style={styles.container}>
          <VideoPlayer style={{ height: 300 }} videoId={this.state.video.id.videoId} loading={this.state.loading} />
        <Button style={{ marginTop: '0%' }}
        large
        title='Watch Together'
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
});