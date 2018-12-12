import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const CustomButton = props => (
    <TouchableOpacity onPress={props.onPress} style={{
        width:"100%"}}>
        <View style={[styles.button]}> 
            <Text style={[{color:"white"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 10,
      alignItems: 'center',
      width:"90%",
      alignSelf:"center",
      backgroundColor:"#66CC99"
    }
})

export default CustomButton;