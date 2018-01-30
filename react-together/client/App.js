import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import MessengerScreen from './screens/MessengerScreen';
import YouTubeScreen  from './screens/YouTubeScreen';

export const AppNavigator = StackNavigator({
  Main: {screen: MainScreen},
  Messneger: {screen: MessengerScreen},
  YouTube: {screen: YouTubeScreen},
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

