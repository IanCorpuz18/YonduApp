import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

   class TitleAndSub extends Component{
     render(){
    return(
        <View style={styles.MainTextHolder}>
        <View style={styles.TitleTextHolder}>
        <Text style={styles.Titletext}>
        {this.props.Title}
        </Text>
        </View>
        <View style={[styles.SubtitleHolder, this.props.subWidth ]}>
        <Text style={styles.Subtitle}>
        {this.props.Subtitle}
        </Text>
        </View>
        </View>
    )
    }
    }
    const styles = StyleSheet.create({
        MainTextHolder:{
            justifyContent:"center",
            alignItems:"center",
            flex:1
        },
        TitleTextHolder:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
        Titletext:{
            fontSize:20,
            color:"black",
            fontWeight:"bold",
        },
        SubtitleHolder:{
            justifyContent:"flex-start",
            alignItems:"center",
            
            flex:4,
            // width:"55%"
        },
        Subtitle:{
            fontSize:20,
            color:"#919292",
            textAlign:"center"
        }
    })
export default TitleAndSub;