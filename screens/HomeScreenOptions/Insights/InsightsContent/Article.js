import React, { Component } from 'react'
import {View,Text,StyleSheet, Image, ImageBackground} from 'react-native'
import bg from '../../../../assets/industries/industries.jpg'
   class Article extends Component{
     render(){
    return(
      <ImageBackground source={bg} style={styles.Imgbg} >
    <View style={styles.Container}>



    </View>
    </ImageBackground>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
      flex:1
    },
    Imgbg:{
      width:"100%",
      height:"100%"
    }
    })
export default Article;