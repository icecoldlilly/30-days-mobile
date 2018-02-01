import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import MessengerScreen from './screens/MessengerScreen';
import SettingsScreen  from './screens/SettingsScreen';
import AuthScreen  from './screens/AuthScreen';
import YouTubeNavigator  from './screens/YouTubeScreen';

export const AppNavigator = StackNavigator({
  Main: {screen: MainScreen},
  Messneger: {screen: MessengerScreen},
  Settings: {screen: SettingsScreen},
  // Replaced YouTubeScreen with YouTube navigator to have YouTube be a modular component
  YouTube: {screen: YouTubeNavigator},
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

