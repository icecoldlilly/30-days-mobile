import React, { Component } from 'react';
import { Container, Header, Content, Button, Body, Title, Text, Grid, Col, Row } from 'native-base';
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
          <Grid>
            <Row>
              <Button onPress={() => this.onPressNewPage('Chat')}>
                <Text>Chat</Text>
              </Button>
            </Row>
            <Row>                        
              <Button onPress={() => this.onPressNewPage('YouTube')}>
                <Text>YouTube</Text>
              </Button>
            </Row>
          </Grid>
      </Container>
    );
  }
}