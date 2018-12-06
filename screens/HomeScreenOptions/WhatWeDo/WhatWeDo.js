import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import OptionsHolder from '../../../components/OptionsHolder'
   class WhatWeDo extends Component{
     render(){
    return(
        <View style={styles.Container}>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDev')}>
        Soft Dev</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('ManagedServices')}>
        Managed Services</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        IT Staffing</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        Cyber Security</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        Trainings and Development</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        Enterprise Solutions</OptionsHolder>
    </View>
    )
    }
    } const styles = StyleSheet.create({
        Container:{
            flex:1 
        },
    
        })
export default WhatWeDo;