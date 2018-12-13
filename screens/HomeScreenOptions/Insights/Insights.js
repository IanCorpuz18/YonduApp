import React, { Component } from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'
import {InsightsContent} from '../../../Arrays/InsightsContent'
import InsightsItem from '../../../components/InsightsItem'
   class Insights extends Component{
       state={
           InsightsList:InsightsContent,
           Insights:""
       }
     render(){
    return(
    <View style={styles.Container}>

           <InsightsItem onPress={ (item) => this.props.navigation.navigate.bind(this,'Article',{data:item}) }/>
            
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"#FFFFFF" 
    },
    BlockHolder:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    ContextHolder:{
        flex:13,
        padding:10,
    },
    TitleText:{
        fontSize:20,
        color:"#000000",
        fontWeight:"bold"
    },
    TagText:{
        fontSize:15,
        color:"blue",
        fontStyle:"italic",
        padding:2
    },
    SubTitleText:{
        fontSize:15,
        color:"gray",
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
export default Insights;