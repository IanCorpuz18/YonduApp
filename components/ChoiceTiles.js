import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import LocalImage from '../components/LocalImage'
import {IndustriesContent} from '../IndustriesContent'
   class ChoiceTiles extends Component{
       state={
        IndustriesList:IndustriesContent,
        IndustriesChoice:""
       }
     render(){
    return this.state.IndustriesList.map((item,key) => {
     return(
<View style={styles.IconTextHolder} key={key}>
<TouchableOpacity onPress={this.props.onPress}>
<LocalImage source={item.img} 
         value={350}
         originalWidth={128}
         originalHeight={128}/>
</TouchableOpacity>
<Text style={styles.LabelStyle}>{item.name}</Text>
</View>



   )})
 
    
    }
    }
    const styles = StyleSheet.create({
     
        IconTextHolder:{
            height:140,
            justifyContent:"center",
            alignItems:"center",
            width:"50%",
        }
    })
export default ChoiceTiles;