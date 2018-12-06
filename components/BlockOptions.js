import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

   class BlockOptionsView extends Component{
     render(){
    return(
        <View style={styles.BlockHolder}>
        <View style={styles.IconTitleHolder}>
        <View style={styles.IconHolder}>
        <Icon name="ios-desktop" size={30}/>
        </View>
        <View style={styles.TitleTextHolder}>
        <Text style={styles.TextTitle}>
        Software Development
        </Text>
        </View>
        </View>

        <View style={styles.ContentHolder}>
        <Text style={styles.Textstyle}>
        Web Application Development
        </Text>
        <Text style={styles.Textstyle}>
        Mobile Application Development
        </Text>
        <Text style={styles.Textstyle}>
        Enterprise Solutions
        </Text>
        <Text style={styles.Textstyle}>
        System Integration
        </Text>
        </View>
        </View>
    )
    }
    }
    const styles = StyleSheet.create({
     
        BlockHolder:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
        },
        IconTitleHolder:{
            flex:1,
            flexDirection: 'row',
        },
        IconHolder:{
            flex:3,
        },
        TitleTextHolder:{
            flex:8,
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