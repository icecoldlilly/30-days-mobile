import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class MainScreen extends Component {
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
        text='Messenger 💬'
        onPress={() => navigate('Messneger')} />
        <Button text='YouTube  📺' onPress={() => navigate('YouTube')} />
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
    paddingTop: 20,
  },
});