import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import BlockOptionsView from '../../../components/BlockOptions'
import Icon from 'react-native-vector-icons/Ionicons'
import OptionsHolder from '../../../components/OptionsHolder'
import CustomButton from '../../../components/CustomButton';
   class WhatWeDo extends Component{
     render(){
    return(
        <View style={styles.Container}>
      
        <ScrollView contentContainerStyle={{alignItems:"center"}}>
        <BlockOptionsView/>
      
        </ScrollView>
        <View style={styles.ButtonHolder}>
        <CustomButton onPress={() => this.props.navigation.navigate('GetQuote')} elevation={{elevation:10}} bgColor={{backgroundColor:"#66CC99"}}>Get Quote</CustomButton>
        </View>
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
        },
        })
export default WhatWeDo;