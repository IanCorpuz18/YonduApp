import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import OptionsHolder from '../../../../../components/OptionsHolder'
   class EnterpriseSol extends Component{
     render(){
    return(
        <View style={styles.Container}>
        <OptionsHolder onPress={()=> this.props.navigation.navigate('WebAppDev')}>
        WebAppDev
        </OptionsHolder>
        <OptionsHolder onPress={()=> this.props.navigation.navigate('MobAppDev')}>
        MobAppDev
        </OptionsHolder>
        <OptionsHolder onPress={()=> this.props.navigation.navigate('EnterpriseSol')}>
        EnterpriseSol
        </OptionsHolder>
        <OptionsHolder onPress={()=> this.props.navigation.navigate('SystemInt')}>
        System Integration
        </OptionsHolder>
        
       </View>
       )
       }
       }
       const styles = StyleSheet.create({
       Container:{ 
           flex:1,
           backgroundColor:"white"
       }
       })
   export default EnterpriseSol;