import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

   class GetQuota extends Component{
     render(){
    return(
    <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Ty')}>
        <Text>Submit</Text>
        </TouchableOpacity>
    </View>
    )
    }
    }
export default GetQuota;