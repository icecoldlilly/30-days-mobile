import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageUI from '../components/Chat/MessageUI'

export default class MessengerScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Messenger',
  });
  state = {
    messages: [],
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <MessageUI />
    )
  }
}