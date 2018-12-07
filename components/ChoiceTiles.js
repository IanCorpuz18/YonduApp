import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import LocalImage from '../components/LocalImage'
   class ChoiceTiles extends Component{
     render(){
    return(
   <View style={styles.RowHolder}>

<View style={styles.IconTextHolder}>
<LocalImage source={require('../assets/industries/ict.png')} 
         value={350}
         originalWidth={128}
         originalHeight={128}/>
<Text style={styles.LabelStyle}>ICT</Text>
</View>
<View style={styles.IconTextHolder}>
<LocalImage source={require('../assets/industries/bpo.png')} 
         value={350}
         originalWidth={128}
         originalHeight={128}/>
<Text style={styles.LabelStyle}>BPO</Text>
</View>


</View>
    )
    }
    }
    const styles = StyleSheet.create({
        RowHolder:{
            flex:1,
            flexDirection:"row",
            // justifyContent:"center",
            // alignItems:"center"
        },
        IconTextHolder:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    })
export default ChoiceTiles;