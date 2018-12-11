import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'

const FormikInput = props => (
     
        <TextInput style={styles.TextInput}
        {...props}
          />
)
    const styles = StyleSheet.create({
    TextInput:{ 
    backgroundColor:"white",
    borderBottomColor:"gray",
    borderBottomWidth:1,
    width:"90%",
    alignContent:"center"
    }
    })
export default FormikInput;