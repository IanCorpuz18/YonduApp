import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

   class Ty extends Component{
     render(){
    return(
    <View style={styles.Container}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')}>
        <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SoftDev')}>
        <Text>Another Quota</Text>
        </TouchableOpacity>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1
    }
    })
export default Ty;