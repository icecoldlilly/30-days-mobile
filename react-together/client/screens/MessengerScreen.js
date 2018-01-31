import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageUI from '../components/Messenger/MessageUI'

export default class MessengerScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Messenger',
  });
  state = {
    messages: [
      {
        _id: 1,
        text: 'What\'s good bro?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
    ],
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <MessageUI messages={this.state.messages}/>
    )
  }
}