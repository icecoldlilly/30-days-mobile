import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GOOGLE_API_KEY } from 'react-native-dotenv';
/* 
  TODO: ✍🏽 Add video player here
   */

export default class PlayerUI extends Component {
  constructor(props) {
    super(props);
    this._toBePlayed = props.playThis
  }
}