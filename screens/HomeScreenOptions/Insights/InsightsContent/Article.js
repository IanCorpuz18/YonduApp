import React, { Component } from 'react'
import {View,Text,StyleSheet, Image, ImageBackground} from 'react-native'
import bg from '../../../../assets/Insight.jpg'
import Icon from 'react-native-vector-icons/Ionicons'
   class Article extends Component{
    
     render(){
       
    return(
    <View style={styles.Container}>
    
    <View style={styles.Main}>
    <ImageBackground source={bg} style={styles.Imgbg}>
    <View style={styles.Header}>
    <View style={styles.Icon}>
    <Icon name="ios-arrow-back" size={35} color="white"/>
    </View>
    <View style={styles.Icon2}>
    <View style={styles.share}>
    <Icon name="ios-share" size={30} color="black"/>
    </View>
    </View>
    </View>
      <View style={styles.CaptionHolder}>
      <Text style={styles.Caption}>
      LoopBack is a highly-extensible, open-source Node.js framework
      </Text>
      </View>
    </ImageBackground>

    </View>
    <View style={styles.Content}>
    <View style={styles.TagDateholder}>
    <View style={styles.Tag}>
    <Text style={styles.Text}>
    SOLUTIONS
    </Text>
    </View>
    <View style={styles.Date}>
    <Text style={styles.Text}>
    Nov 7, 2018
    </Text>
    </View>
    </View>
      
      <View style={styles.ContextHolder}>
      <Text style={styles.Context}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>

      </View>

    </View>
    </View>
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
    },
    Main:{
      flex:3
      
    },
    Header:{
      flex:8,
      flexDirection:"row"
    },
    Icon:{
      flex:1,
      margin:10
    },
    Icon2:{
      flex:1,
      alignItems:"flex-end",
      margin:10,
      
    },
    share:{
      width:"15%",
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
      padding:4
    },
    CaptionHolder:{
      flex:2,
      backgroundColor:"rgba(0,0,0,0.7)",
      padding:10
    },
    Caption:{
      fontSize:20,
      fontWeight:"bold",
      color:"white"
    },
    Content:{
      flex:5
    },
    TagDateholder:{
      flex:2,
      flexDirection:"row",
      justifyContent:"center"
    },
    Tag:{
      flex:1,
      alignItems:"flex-start",
      justifyContent:"center",
      paddingLeft:10
    },
    Date:{
      
      flex:1,
      alignItems:"flex-end",
      justifyContent:"center",
      paddingRight:10
    },
    Text:{
      fontSize:15,
      color:"#9B9B9B"
    },
    ContextHolder:{
      flex:20,
      paddingHorizontal:10
    },
    Context:{
      color:"#4A4A4A",
      fontSize:17
    }
    })
export default Article;