import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import MessengerScreen from './screens/MessengerScreen';
//import YouTubeScreen  from './screens/YouTubeScreen';
import YouTubeNavigator  from './screens/YouTubeScreen';

export const AppNavigator = StackNavigator({
  Main: {screen: MainScreen},
  Messneger: {screen: MessengerScreen},
  // Replaced YouTubeScreen with YouTube navigator to have YouTube be a modular component
  //YouTube: {screen: YouTubeScreen},
  YouTube: {screen: YouTubeNavigator},
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

