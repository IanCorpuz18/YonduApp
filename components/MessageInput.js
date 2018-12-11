import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'

const MessageInput = props => (
    <View style={styles.MainHolder}>
        <View style={[styles.Holder, props.border]}>
        <TextInput style={[styles.TextInput, props.styleInput]}
        {...props}
          />
          
          </View>
          <Text style={{color:"red", textAlign:"left"}}>{props.Text}</Text>
          </View>
)
    const styles = StyleSheet.create({
    TextInput:{ 
    backgroundColor:"white",
    width:"100%",    
    alignContent:"center"
    },
    Holder:{
        backgroundColor:"white",
        alignItems:"center",
        borderBottomColor:"#C5C5C5",
         borderBottomWidth:1,
         width:"90%",
         flex:2,
         justifyContent:"flex-start"
    },
    MainHolder:{
        flex:3,
        width:"100%",
        alignItems:"center"
    },
    })
export default MessageInput;