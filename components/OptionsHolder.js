import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

const OptionsHolder = props => (

        
        
        <View style={styles.HomePageOptionHolder}>
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.TextOptionHolder}> 
            {props.children}</Text>
            </TouchableOpacity>
        </View>
    )
   
    const styles = StyleSheet.create({
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
export default OptionsHolder;