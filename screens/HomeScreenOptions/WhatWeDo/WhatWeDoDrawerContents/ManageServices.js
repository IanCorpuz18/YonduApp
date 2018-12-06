import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

   class ManageServices extends Component{
     render(){
    return(
    <View style={styles.Container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ManagedDeskService')}>
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
export default ManageServices;