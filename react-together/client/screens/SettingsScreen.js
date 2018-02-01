import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Settings',
  });
  render() {
    return (
      <Text> This is where your settings go </Text>
    )
  }
}