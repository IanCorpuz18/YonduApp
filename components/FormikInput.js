import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const FormikInput = props => (
    <View style={[styles.MainHolder,props.style]}>
        <TextInput style={[styles.TextInput, props.styleInput]}
            {...props}
        />
        <View style={{
            backgroundColor: "#C5C5C5",
            height: 1, width: "90%"
        }} />
        <Text style={{ color: "red", alignSelf:"flex-start",paddingLeft:20 }}>{props.Text}</Text>

    </View>
)
const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: "#FFFFFF",
        width: "90%",
        height:40
    },
    MainHolder: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end"

    }
})
export default FormikInput;