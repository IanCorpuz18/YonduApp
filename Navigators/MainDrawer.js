import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import drawerImg from '../assets/drawerimg.jpg'
import yonduImg from '../assets/yondu-small.png'
import { IndustriesStack, InsightsStack, WhatWeDoStack, ContactUsStack, AboutYonduStack } from './'
const Drawer = (props) => (
  <SafeAreaView style={{ flex: 1, width: '100%' }}>
    <View style={styles.drawerView}>
      <ImageBackground source={drawerImg} style={styles.imageBG} resizeMethod='resize'>
        <View style={styles.inView}>
          <Image source={yonduImg} style={styles.imageText} resizeMethod='resize' resizeMode='contain' />
        </View>
      </ImageBackground>
      <DrawerItems style={styles.DrawerText} {...props} />
    </View>
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => props.navigation.navigate('SubscribeStack')}>
        <Text style={styles.EmailText} >Subscribe with Email</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)
const MainDrawer = createDrawerNavigator({
  "What We Do?": WhatWeDoStack,
  "Industries": IndustriesStack,
  "Insights": InsightsStack,
  "About Yondu": AboutYonduStack,
  "Contact Us": ContactUsStack

}, {
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width * .85,
    contentOptions: {
      activeTintColor: '#6BCE9D',
      activeBackgroundColor: "transparent",
      labelStyle: {
        fontSize: 20,
        fontWeight: "normal",
        color: "#919292"
      }}}
)
const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  EmailText: {
    fontSize: 20
  },
  drawerView: {
    flex: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between'
  },
  itemView: {
    height: Dimensions.get('window').height * .07,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: Dimensions.get('window').height * .03
  },
  imageBG: {
    width: '100%',
    height: 140,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    width: '70%',
    height: 35
  },
  inView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
})
export default MainDrawer;