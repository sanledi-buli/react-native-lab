import React, { Component, PropTypes } from 'react';
import LoginScreen from './containers/LoginScreen.js';
import SignupScreen from './components/SignupScreen.js';
import styles from './styles.js';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene key="loginScreen"
            component={LoginScreen}
            animation='fade'
            hideNavBar={true}
            initial={true} />
          <Scene key="signupScreen"
            component={SignupScreen}
            animation='fade'
            hideNavBar={true}
           />
        </Scene>
      </Router>
    )
  }
}
