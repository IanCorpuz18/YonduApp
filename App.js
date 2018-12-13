
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ty from './screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev/Ty'
import GeneralSwitchNav from './Navigators/GeneralSwitchNav'
import GetQuote from './screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev/GetQuote'
import SoftDev from './screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev/SoftDev'
import Article from './screens/HomeScreenOptions/Insights/InsightsContent/Article'
import { AboutYonduStack,IndustriesStack,InsightsStack,ContactUsStack,WhatWeDoStack } from './Navigators/'
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
