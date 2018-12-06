import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {WhateWeDoContent} from '../WhatWeDoContents'
   class BlockOptionsView extends Component{
       state={
           items:WhateWeDoContent
       }
     render(){

    return(
        <View>
        {this.state.items.map((item,key) => {return(
            <View style={styles.BlockHolder} key={key}>
            <View style={styles.IconTitleHolder}>
            <View style={styles.IconHolder}>
            <Icon name={item.icon} size={30}/>
            </View>
            <View style={styles.TitleTextHolder}>
            <Text style={styles.TextTitle}>
            {item.title}
            </Text>
            </View>
            </View>
    
            <View style={styles.ContentHolder}>
            <Text style={styles.Textstyle}>
            {item.subContents.subtitle}
            </Text>
            
            </View>
            
            </View>
            )})}</View>
    )
    }
    }
    const styles = StyleSheet.create({
     
        BlockHolder:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            marginLeft:10 ,
            marginRight: 10,
            elevation:1,
            backgroundColor: "white",
        },
        IconTitleHolder:{
            flex:2,
            flexDirection: 'row',
        },
        IconHolder:{
            flex:3,
            alignItems: 'center',
        },
        TitleTextHolder:{
            flex:10,
            alignItems: 'flex-start',
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
export default BlockOptionsView;