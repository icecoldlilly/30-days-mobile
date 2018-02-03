import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView, Platform, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// import YouTube from 'react-native-youtube';

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

  render(){
    const { navigate } = this.props.navigation;
    if(!this.state.video || this.state.loading) return <ActivityIndicator size={'large'} style={styles.indicator}/>
    return (
      // Use WebView
      <View style={styles.container}>
        <View style={{ height: 300 }}>
          <WebView
                  style={ styles.WebViewContainer }
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  mixedContentMode ={"always"}
                  source={{
                    uri: `https://www.youtube.com/embed/${this.state.video.id.videoId}?enablejsapi=1`,
                    headers: {
                      'Referer': 'https://www.youtube.com/',
                    }
                }}
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