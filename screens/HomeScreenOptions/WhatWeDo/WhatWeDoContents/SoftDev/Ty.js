import React, { Component } from 'react'
import {View,Text,StyleSheet,  Image} from 'react-native'
import LocalImage from '../../../../../components/LocalImage';
import CustomButton from '../../../../../components/CustomButton';
import TitleAndSub from '../../../../../components/TitleandSub'
   class Ty extends Component{

     render(){
    return(
    <View style={styles.Container}>
        <View style={styles.ImageHolder}>
        <LocalImage
         source={require('../../../../../assets/clive-thank-you.png')} 
         value={150}
         originalWidth={300}
         originalHeight={390}
        />
        </View>
        <TitleAndSub subWidth={{width:"55%"}}/>
        <CustomButton>Back To Home</CustomButton>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1
    },
    ImageHolder:{
        flex:2,
        justifyContent:"flex-end",
        alignItems:"center"

    },
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
        width:"55%"
    },
    Subtitle:{
        fontSize:20,
        color:"#919292",
        textAlign:"center"
    }
    })
export default Ty;