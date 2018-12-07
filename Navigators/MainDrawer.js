import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import WhatWeDoStack from './WhatWeDoStack'
import IndustriesStack from './IndustriesStack'
import { AboutYondu,ContactUs,Industries,Insights,Careers } from '../screens/HomeScreenOptions'
const Drawer = (props) => (
  <SafeAreaView style={{ flex: 1, width:'100%' }}>

  <View style={styles.drawerView}>
      <DrawerItems style={styles.DrawerText} {...props} />
  </View>

</SafeAreaView>
)
const MainDrawer = createDrawerNavigator({
  "What we do":WhatWeDoStack,
  "Industries":IndustriesStack,
  "Insights":Insights,
  "Careers":Careers,
  "About Yondu": AboutYondu,
  "Contact Us":ContactUs
  
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

export default MainDrawer;