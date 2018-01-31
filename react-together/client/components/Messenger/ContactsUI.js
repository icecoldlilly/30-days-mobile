import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
/* 
  TODO: ✍🏽 Add contact list here
   */

export default class ContactsUI extends Component {
  constructor(props) {
    super(props);
    this._contacts = props.contacts
  }
}