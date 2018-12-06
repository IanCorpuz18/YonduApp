import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Ict from '../screens/HomeScreenOptions/Industries/IndustriesContent/Ict'
import Bpo from '../screens/HomeScreenOptions/Industries/IndustriesContent/Bpo'
import BankingAndFinance from '../screens/HomeScreenOptions/Industries/IndustriesContent/BankingAndFinance'
import RealEstate from '../screens/HomeScreenOptions/Industries/IndustriesContent/RealEstate'
import Gov from '../screens/HomeScreenOptions/Industries/IndustriesContent/Gov'
import Manufacturing from '../screens/HomeScreenOptions/Industries/IndustriesContent/Manufacturing'
import Construction from '../screens/HomeScreenOptions/Industries/IndustriesContent/Construction'
import Retail from '../screens/HomeScreenOptions/Industries/IndustriesContent/Retail'

const Drawer = (props) => (
  <SafeAreaView style={{ flex: 1, width:'100%' }}>
  <View style={styles.drawerView}>
      <DrawerItems style={styles.DrawerText} {...props} />
  </View>

</SafeAreaView>
)
export default IndustriesDrawer = createDrawerNavigator({
  "ICT":Ict,
  "BPO":Bpo,
  "Banking and Finance":BankingAndFinance,
  "Real Estate":RealEstate,
  "Goovernment": Gov,
  "Manufacturing":Manufacturing,
  "Construction":Construction,
  "Retail":Retail
  
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