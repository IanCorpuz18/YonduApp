import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import SoftDevStack from '../Navigators/SoftDevStack'
import ItStaffing from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/ItStaffing';
import CyberSec from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/CyberSec';
import TrainingAndDev from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/TrainingAndDev';
import EnterpriseSol from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/EnterpriseSol'
import ManageServiceStack from '../Navigators/ManageServiceStack'
const Drawer = (props) => (
  <SafeAreaView style={{ flex: 1, width:'100%' }}>

  <View style={styles.drawerView}>
      <DrawerItems style={styles.DrawerText} {...props} />
  </View>

</SafeAreaView>
)
export default WhatWeDo = createDrawerNavigator({
  "Software Development":SoftDevStack,
  "Manage Services":ManageServiceStack,
  "IT Staffing":ItStaffing,
  "Cyber Security":CyberSec,
  "Training and Development": TrainingAndDev,
  "Enterprise Solutions":EnterpriseSol
  
}, {
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width*.85,
    contentOptions: {
      activeTintColor: '#FF5A5F',
      activeBackgroundColor:"transparent",
      labelStyle:{
        fontSize:20
      }
      
    }
  }
)
const styles = StyleSheet.create({

drawerView:{
  flex:4,
borderBottomColor: "#96999A",
borderBottomWidth: 1,
},


})