import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
/* 
  TODO: ✍🏽 Add video list here
   */
  import VideoListItem from './VideoListItem'; 
  const VideoListUI = ({items, onVideoSelect}) => {
    resetScroll = () => {
      this.ref.scrollTo({y: 0})
    };
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
       <ListView 
        ref={ref => this.listView = ref}
        dataSource={ items }
        style={{flex: 4}}
        renderRow={ this.renderRow } />
     )
   }
  
   export default VideoListUI;