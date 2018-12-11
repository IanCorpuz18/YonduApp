import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'

const FormikInput = props => (
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
    width:"90%",    
    alignContent:"center"
    },
    MainHolder:{
        flex:1,
        width:"100%",
        alignItems:"center"
    },
    Holder:{
        width:"90%",
        backgroundColor:"white",
        borderBottomColor:"#C5C5C5",
        borderBottomWidth:1,

    }
    })
export default FormikInput;