import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { GOOGLE_API_KEY } from 'react-native-dotenv';
/* 
  TODO: ✍🏽 Add video list here
   */
  import VideoListItem from './VideoListItem'; 
  const VideoListUI = ({items, onVideoSelect}) => {
     renderRow = (video, sId, rId) => {
       return (
         <VideoListItem
           key={ rId }
           item={ video }
           onVideoSelect={ onVideoSelect }
         />
       );
     };
  
     return (
       <ListView dataSource={ items }
         style={{flex: 4}}
         renderRow={ this.renderRow } />
     )
   }
  
   export default VideoListUI;