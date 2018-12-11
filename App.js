
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ty from './screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev/Ty'
import GeneralSwitchNav from './Navigators/GeneralSwitchNav'
import GetQuota from './screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev/GetQuota'
import IndustriesStack from './Navigators/IndustriesStack'
import SoftDev from './screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev/SoftDev'
import InsightsStack from './Navigators/InsightsStack'
import Article from './screens/HomeScreenOptions/Insights/InsightsContent/Article'
export default class App extends Component {
  render() {
    return (
      <InsightsStack/>
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
