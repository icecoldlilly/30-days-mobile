import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Together',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button text="Messenger" onPress={() => navigate('Messneger')} />
        <Button text="YouTube" onPress={() => this.onPressNewPage("YouTube")} />
      </View>
    );
  }
  onPressNewPage(pageName) {
    // alert(`Opened ${pageName}`)
    navigate('Messneger')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});