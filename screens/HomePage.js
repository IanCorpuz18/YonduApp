import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import OptionsHolder from '../components/OptionsHolder'
   class HomePage extends Component{
     render(){
    return(
    <View style={styles.Container}>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('WhatWeDo')}>
        What We Do</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('Industries')}>
        Industries</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('Insights')}>
        Insights</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('MainDrawer')}>
        Careers</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('MainDrawer')}>
        About Yondu</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('MainDrawer')}>
        Contact Us</OptionsHolder>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{
        flex:1 
    },

    })
export default HomePage;