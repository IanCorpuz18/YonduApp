
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ty from './screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev/Ty'
import GeneralSwitchNav from './Navigators/GeneralSwitchNav'
export default class App extends Component {
  render() {
    return (
      <Ty/>
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
