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

           <InsightsItem onPress={ () => this.props.navigation.navigate('Article') }/>

    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"white" 
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
        color:"black",
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