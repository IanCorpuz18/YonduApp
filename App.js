
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import GeneralSwitchNav from './Navigators/GeneralSwitchNav'
export default class App extends Component {
  render() {
    return (
      <GeneralSwitchNav/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
