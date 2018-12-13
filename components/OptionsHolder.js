import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity,ImageBackground} from 'react-native'

import img from '../assets/what_we_do.png'
const OptionsHolder = props => (

        <View style={styles.HomePageOptionHolder}>
        <TouchableOpacity onPress={props.onPress}>
      
        
    <ImageBackground source={props.img} style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.TextOptionHolder}> 
            {props.children}</Text>
        </ImageBackground>
            </TouchableOpacity>
        </View>
    )
   
    const styles = StyleSheet.create({
        HomePageOptionHolder:{
            flex:1,
            // justifyContent: 'center',
            // alignItems:"center",
            // backgroundColor: "#D8D8D8",
        },
        TextOptionHolder:{
            fontSize:20,
            color:"#FFFFFF",
            fontWeight: 'bold',
        }
    })
export default OptionsHolder;