import React, { Component, PropTypes } from 'react';
import LoginScreen from './containers/LoginScreen.js';
import styles from './styles.js';
import { View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return(
      <View>
        <LoginScreen />
      </View>
    )
  }
}
