import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'

const MessageInput = props => (
    <View style={styles.holder}>
    <View style={styles.MainHolder}>
        <TextInput multiline={true} style={[styles.TextInput, props.styleInput]}
        {...props}
          />
       
          </View>
             <View style={{
                borderBottomColor: "#C5C5C5",borderBottomWidth:1
                , width: "90%"
            }} />
            
          <Text style={{color:"red",paddingLeft:20, alignSelf:"flex-start"}}>{props.Text}</Text>
          </View>
          
)
    const styles = StyleSheet.create({
    TextInput:{ 
        width: "90%",
        
    },
    MainHolder:{
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        height:250,
    },
    holder:{
        alignItems:"center",
    }
    })
export default MessageInput;