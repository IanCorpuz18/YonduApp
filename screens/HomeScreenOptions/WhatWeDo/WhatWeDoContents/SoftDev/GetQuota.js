import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, TextInput} from 'react-native'

   class GetQuota extends Component{
       state={
        Software:""
       }
     render(){
    return(
    <View style={styles.Container}>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Ty')}>
        <Text>Submit</Text>
        </TouchableOpacity> */}
        <View style={styles.Holder}>
        <View style={styles.PickerLabelHolder}>
        <Text style={styles.PickerLabelText}>
        CHOOSE
        </Text>
        </View>
        <View style={styles.PickerHolder}>
        <Picker
  selectedValue={this.state.Software}
  style={styles.PickerStyle}
  onValueChange={(itemValue, itemIndex) => this.setState({Software: itemValue})}>
  <Picker.Item label="Select Software" value="Select" color="#9A9D9F" />
  <Picker.Item label="Web App" value="WebApp" color="#9A9D9F" />
  <Picker.Item label="Mobile App" value="MobileApp" color="#9A9D9F" />
  <Picker.Item label="Enterprise Solution" value="EnterpriseSol" color="#9A9D9F" />
  <Picker.Item label="System Integration" value="SystemInt" color="#9A9D9F" />
  
</Picker>
        </View>
        </View>
        {/* <View style={styles.Holder1}>
        <View style={styles.InputHolder}>
        <TextInput style={styles.InputStyle} placeholder="Full Name" />
        </View>
        <View style={styles.InputHolder}>
        <TextInput style={styles.InputStyle} placeholder="Company" />
        </View>
        <View style={styles.InputHolder}>
        <TextInput style={styles.InputStyle} placeholder="Email" />
        </View>
        <View style={styles.InputHolder}>
        <TextInput style={styles.InputStyle} placeholder="Contact Number" />
        </View>
        </View> */}
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1
    },
    Holder:{
        flex:1
    },
    PickerHolder:{
        flex:1
    },
    PickerLabelText:{
        fontSize:20,
        fontWeight: 'bold',
    },
    PickerStyle:{
        width:"100%",
        height:"100%"
    },
    Holder1:{
        flex:1
    }
    })
export default GetQuota;