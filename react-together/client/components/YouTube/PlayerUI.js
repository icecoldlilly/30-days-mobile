import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// import YouTube from 'react-native-youtube';

/* 
  TODO: ✍🏽 Add video player here
   */

export default class PlayerUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: false
    }
  }

  componentWillMount() {
    this.setState({
      // videoId: this.playThis
    })
  }

  render(){
    console.log(`Play video: ${this.state.videoId}`);
    if(!this.props.video || this.props.loading) return <ActivityIndicator size={'large'} style={styles.indicator}/>
    return (
      
      // Use WebView
      <View style={styles.container}>
        <View style={{ height: 300 }}>
          <WebView
                  style={ styles.WebViewContainer }
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: `https://www.youtube.com/embed/${this.props.video.id.videoId}` }}
          />
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