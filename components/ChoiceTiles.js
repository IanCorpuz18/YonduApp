import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import LocalImage from '../components/LocalImage'
import {IndustriesContent} from '../Arrays/IndustriesContent'
   class ChoiceTiles extends Component{
       state={
        IndustriesList:IndustriesContent,
        IndustriesChoice:""
       }
     render(){
    return this.state.IndustriesList.map((item,key) => {
     return(
<View style={styles.IconTextHolder} key={key}>
<TouchableOpacity onPress={this.props.onPressIcon}>
<LocalImage source={item.img} 
         value={330}
         
         originalWidth={128}
         originalHeight={128}/>
         </TouchableOpacity>
<TouchableOpacity onPress={this.props.onPressText}>
<Text style={styles.LabelStyle}>{item.name}</Text>

</TouchableOpacity>
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