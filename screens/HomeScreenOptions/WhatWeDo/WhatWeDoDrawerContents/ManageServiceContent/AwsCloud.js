import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import OptionsHolder from '../../../../../components/OptionsHolder'
   class AwsCloud extends Component{
     render(){
    return(
    <View style={styles.Container}>
        <OptionsHolder onPress={()=> this.props.navigation.navigate('ManagedDeskService')}>
        ManagedDeskService
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
        backgroundColor: "white",
    }
    })
export default AwsCloud;