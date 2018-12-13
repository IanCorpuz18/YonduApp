import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput,Picker} from 'react-native'

const CustomPicker = props => (
  <View style={styles.PickeTextView}>
  <Picker mode="dropdown"
      style={styles.PickerStyle}
      {...props}
      >
      {
          props.data.map((item, key) => {
              return (
                  <Picker.Item label={item.name} value={item.value} key={key} />
              )
          })}
  </Picker>
  <View style={styles.hrStyle} />
  <Text style={styles.ErrorStyle}>{props.error}</Text>
</View>

)
const styles = StyleSheet.create({
  PickeTextView: {
      paddingHorizontal: 20,

  },
PickerStyle:{
  width: "100%", 
  height: 40,
  color:"#9E9E9E" 
},
hrStyle:{
  width: '100%', 
  height: 1,
  backgroundColor: '#C5C5C5', 
  marginVertical: 1
 },
 ErrorStyle:{ 
   color: "red", 
 width: '100%'
 }
})
export default CustomPicker;