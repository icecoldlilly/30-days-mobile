import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MessengerScreen from './MessengerScreen';
import SettingsScreen  from './SettingsScreen';
import YouTubeNavigator  from './YouTubeScreen';
export class MainScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Together',
    // This removes back button title
    headerBackTitle: null,
    headerRight: <Icon style={{marginRight: 3}} name="cog" color="black" type="font-awesome" onPress={() => navigation.navigate('Settings')}/>
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <Button 
        large
        title={'Messenger'}
        // icon={ <Icon name="commenting-o" color="white" type="font-awesome" /> }
        buttonStyle={{backgroundColor: '#0083ff', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        onPress={() => navigate('Messneger')} /> */}
        <Button
        large
        title={'YouTube'}
        // icon={ <Icon name="youtube-play" color="white" type="font-awesome" /> }
        buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        onPress={() => navigate('YouTube')} />
      </View>
    );
  }
}
export default MainScreenNavigator = StackNavigator(
  {
    Main: {screen: MainScreen},
    Messneger: {screen: MessengerScreen},
    Settings: {screen: SettingsScreen},
    // Replaced YouTubeScreen with YouTube navigator to have YouTube be a modular component
    YouTube: {screen: YouTubeNavigator},
  },
  {
    // mode: 'modal',
    // headerMode: 'none',
  },
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
});