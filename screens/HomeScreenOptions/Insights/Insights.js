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
    })
export default Insights;