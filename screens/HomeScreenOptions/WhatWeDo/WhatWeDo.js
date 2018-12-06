import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import BlockOptionsView from '../../../components/BlockOptions'
import Icon from 'react-native-vector-icons/Ionicons'
import OptionsHolder from '../../../components/OptionsHolder'
   class WhatWeDo extends Component{
     render(){
    return(
        <View style={styles.Container}>
        {/* <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDev')}>
        Soft Dev</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('ManagedServices')}>
        Managed Services</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        IT Staffing</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        Cyber Security</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        Trainings and Development</OptionsHolder>
        <OptionsHolder  onPress={() => this.props.navigation.navigate('SoftDevStack')}>
        Enterprise Solutions</OptionsHolder> */}
        <ScrollView>
        <BlockOptionsView/>
      
        </ScrollView>

    </View>
    )
    }
    } const styles = StyleSheet.create({
        Container:{
            flex:1,
            backgroundColor: "white",
        },
        BlockHolder:{
            flex:1
        },
        IconTitleHolder:{
            flex:1,
            flexDirection: 'row',
        },
        IconHolder:{
            flex:1
        },
        TitleTextHolder:{
            flex:9
        },
        TextTitle:{
            fontSize:17,
            fontWeight: 'bold',
        },
        ContentHolder:{
            flex:4
        },
        Textstyle:{
            fontSize:15,
            color:"#6E7F8D"
        }
        })
export default WhatWeDo;