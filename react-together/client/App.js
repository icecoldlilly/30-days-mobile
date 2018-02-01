import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import MessengerScreen from './screens/MessengerScreen';
import SettingsScreen  from './screens/SettingsScreen';
import AuthScreen  from './screens/AuthScreen';
import YouTubeNavigator  from './screens/YouTubeScreen';

export const AppNavigator = StackNavigator({
  Main: {screen: MainScreenNavigator},
  Auth: {screen: AuthScreen},
},
{
  // Hides away the double header occuring due to redirection to MainScreenNavigator
  headerMode: 'none',
}
  
);

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

