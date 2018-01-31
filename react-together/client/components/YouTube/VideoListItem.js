import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {   Image, View, Text, TouchableOpacity, } from 'react-native';
var moment = require('moment');
import styles from './styles/VideoListItem.style.js'

const VideoListItem = ({item, onVideoSelect}) => {
  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ () => { onVideoSelect(item) } }>
      <View style={ styles.listItem }>
        <Image
          style={ styles.videoImage }
          source={ {uri: item.snippet.thumbnails.high.url} } />

        <View style={ styles.videoContainer }>
          {/* Need to add an API that retrieves channel icons */}
          {/* <View style={ styles.videoIconChannelContainer }>
            <View style={ styles.videoIconChannel }>
                <Image
              style={ styles.videoIconChannel }
              source={ {uri: item.snippet.thumbnails.high.url} } />
            </View>
          </View> */}

          <View style={ styles.videoTextContainer }>
            <Text style={ styles.videoTitle }>
              { ((item.snippet.title).length > 37) ? (((item.snippet.title).substring(0, 37 - 3)) + '...') : item.snippet.title }
            </Text>
            <Text style={ styles.videoDescription }>
              { ((item.snippet.channelTitle).length > 30) ? (((item.snippet.channelTitle).substring(0, 30 - 3)) + '...') : item.snippet.channelTitle }
            </Text>
            <Text style={ styles.videoDescription }>
              { moment(item.snippet.publishedAt).fromNow() }
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default VideoListItem;