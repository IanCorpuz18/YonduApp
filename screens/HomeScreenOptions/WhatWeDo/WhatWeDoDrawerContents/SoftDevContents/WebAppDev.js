import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

   class WebAppDev extends Component{
     render(){
    return(
    <View style={styles.Container}>
     
        <View style={styles.OptionsHolder}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('EnterpriseSol')}>
        <Text style={styles.OptionText}>Enterprise Solution</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.OptionsHolder}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('MobAppDev')}>
        <Text style={styles.OptionText}>Mobile Application Development</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.OptionsHolder}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('SystemInt')}>
        <Text style={styles.OptionText}>System Integration</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor:"white"
    },
    OptionsHolder:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    OptionText:{
        fontSize:17,
        fontWeight: 'bold',
    }
    })
export default WebAppDev;