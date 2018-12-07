import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const CustomButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,props.elevation,props.border, props.bgColor, props.ViewFlex]}> 
            <Text style={[{color:"white"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 5,
      alignItems: 'center',
      width:"80%",
      alignSelf:"center",
      backgroundColor:"#FF5A5F"
    }
})

export default CustomButton;