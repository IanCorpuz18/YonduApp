import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {InsightsContent} from '../Arrays/InsightsContent'
   class InsightsItem extends Component{
       state={
           InsightsList:InsightsContent,
           Insight:""
       }
     render(){
        return this.state.InsightsList.map((item,key) => {
            return(
        <View style={styles.BlockHolder} key={key}>
            
        <View style={styles.ContextHolder}>
        <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.TitleText}>
        {item.title}
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.SubTitleText}>
        {item.subtitle}
        </Text>
        </TouchableOpacity>
        <Text style={[styles.TagText, {color:item.color}]}>
        {item.tag} - {item.date}
        </Text>
       

        </View>   

        <View style={styles.ImageHolder}>
        
        </View>    
        </View>
        
   )})
    
    }
    }
    
    const styles = StyleSheet.create({
        BlockHolder:{
            // flex:1,
            flexDirection:"row",
            borderBottomColor:"#F0F1F5",
            borderBottomWidth:1
        },
        ContextHolder:{
            flex:13,
            padding:10,
        },
        TitleText:{
            fontSize:20,
            color:"black",
            fontWeight:"bold"
        },
        TagText:{
            fontSize:15,
            fontStyle:"italic",
            padding:2
        },
        SubTitleText:{
            fontSize:15,
            color:"#808F9B",
            padding:2
        },
        ImageHolder:{
            flex:3,
            height:75,
            width:75,
            backgroundColor:"#D8D8D8",
            margin:10
        }
        })
export default InsightsItem;