import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import "@expo/vector-icons"; // 6.2.2
export default class MainScreen extends Component {
  static ChatIcon = <Icon name="fa-commenting-o" type="font-awesome" />
  static navigationOptions = {
    title: 'Together',
    // This removes back button title
    headerBackTitle: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button 
        large
        text={'Messenger'}
        icon={ <Icon name="commenting-o" color="white" type="font-awesome" /> }
        buttonStyle={{backgroundColor: '#0083ff', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        onPress={() => navigate('Messneger')} />
        <Button
        large
        text='YouTube'
        icon={ <Icon name="youtube-play" color="white" type="font-awesome" /> }
        buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        onPress={() => navigate('YouTube')} />
      </View>
    );
  }
}

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