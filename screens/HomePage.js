import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import OptionsHolder from '../components/OptionsHolder'
   class HomePage extends Component{
     render(){
    return(
    <View style={styles.Container}>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('WhatWeDoDrawer')}>
        What We Do</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('IndustriesDrawer')}>
        Industries</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('WhatWeDoDrawer')}>
        Insights</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('WhatWeDoDrawer')}>
        Careers</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('WhatWeDoDrawer')}>
        About Yondu</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('WhatWeDoDrawer')}>
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