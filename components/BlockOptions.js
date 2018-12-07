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
            {item.subContents.map((item,key) =>{
                return(  
            
                    <Text style={styles.Textstyle} key={key}>
                    {item}
                    </Text>
                    )
            }) 
                }
          
            
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
            alignItems: 'flex-start',
            margin: 20,
            // marginLeft:10 ,
            // marginRight: 10,
            elevation:20,
            backgroundColor: "white",
            width:"80%",
            borderLeftColor: "#A5FCCB",
            borderLeftWidth: 4,
            paddingVertical:10
        },
        IconTitleHolder:{
            flex:2,
            flexDirection: 'row',
            justifyContent:"center",
            alignItems: 'center',
        },
        IconHolder:{
            flex:3,
            alignItems: 'flex-end',
            paddingRight: 10,
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
            flex:4,
            alignItems:"flex-start",
            paddingLeft: 65,
        },
        Textstyle:{
            fontSize:15,
            color:"#6E7F8D"
        }
        })
export default BlockOptionsView;