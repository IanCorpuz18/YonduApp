import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

   class SoftDev extends Component{
     render(){
    return(
    <View style={styles.Container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('WebAppDev')}>
        <Text>GOTO WebAppDev</Text>
        </TouchableOpacity>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
        Container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center', 
    }
    })
export default SoftDev;