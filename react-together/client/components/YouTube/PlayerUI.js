import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YouTube from 'react-native-youtube';

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
      video: this.playThis
    })
  }

  render(){
    return (
      <YouTube
        videoId={this.state.video}   // The YouTube video ID
        play={true}             // control playback of video with true/false
        fullscreen={true}       // control whether the video should play in fullscreen or inline
        loop={true}             // control whether the video should loop when ended

        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}

        style={{ alignSelf: 'stretch', height: 300 }}
      />
    );
  }
}