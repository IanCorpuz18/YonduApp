import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

   class HomePage extends Component{
     render(){
    return(
    <View style={styles.Container}>
        <View style={styles.HomePageOptionHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('WhatWeDoDrawer')}>
            <Text style={styles.TextOptionHolder}> 
            What We Do</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.HomePageOptionHolder}>
        <Text style={styles.TextOptionHolder}> 
            Industries</Text>
        </View>
        <View style={styles.HomePageOptionHolder}>
        <Text style={styles.TextOptionHolder}> 
            Insights</Text>
        </View>
        <View style={styles.HomePageOptionHolder}>
        <Text style={styles.TextOptionHolder}> 
         Careers</Text>
        </View>
        <View style={styles.HomePageOptionHolder}>
        <Text style={styles.TextOptionHolder}> 
            About Yondu</Text>
        </View>
        <View style={styles.HomePageOptionHolder}>
        <Text style={styles.TextOptionHolder}> 
            Contact Us</Text>
        </View>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{
        flex:1 
    },
    HomePageOptionHolder:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor: "#D8D8D8",
    },
    TextOptionHolder:{
        fontSize:17,
        fontWeight: 'bold',
    }
    })
export default HomePage;