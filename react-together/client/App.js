import React, { Component } from 'react';
import { Container, Header, Content, Button, Body, Title, Text } from 'native-base';
export default class App extends Component {
  onPressNewPage(pageName) {
    alert(`Opened ${pageName}`)
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Together</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{alignItems: 'center', flex: 1, padding: 20, justifyContent: 'space-around'}}>
          <Button onPress={() => this.onPressNewPage('Chat')}>
            <Text>Chat</Text>
          </Button>
          <Button onPress={() => this.onPressNewPage('YouTube')}>
            <Text>YouTube</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}