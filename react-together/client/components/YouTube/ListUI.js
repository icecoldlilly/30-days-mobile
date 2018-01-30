import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
/* 
  TODO: ✍🏽 Add video list here
   */

export default class ListUI extends Component {
  constructor(props) {
    super(props);
    this._videos = props.videos
  }
}