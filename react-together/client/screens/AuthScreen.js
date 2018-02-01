import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AuthScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Authentication',
  });
  render() {
    return (
      <Text> This is where you authenticate </Text>
    )
  }
}