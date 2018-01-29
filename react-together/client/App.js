import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import ChatScreen from './screens/ChatScreen';
import YouTubeScreen  from './screens/YouTubeScreen';

export const AppNavigator = StackNavigator({
  Main: {screen: MainScreen},
  Messneger: {screen: ChatScreen},
  YouTube: {screen: YouTubeScreen},
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

