import React, { Component } from 'react'
import {View,Text,StyleSheet, Image, ImageBackground, TouchableOpacity,Share} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// import Share from 'react-native-share'
   class Article extends Component{
    shareHandler = () => {
       Share.share({
        title:"Share",
        message:"Hello",
        URL:"https://facebook.github.io/react-native/",
        subject:"Sharing"
      })
    }
     render(){  
      
       const { navigation } = this.props;
      const itemId = navigation.getParam("data", null);
          return(
    <View style={styles.Container}>
    <View style={styles.Main}>
    <ImageBackground source={itemId.img} style={styles.Imgbg}>
    <View style={styles.Header}>
    <View style={styles.Icon}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Insights')}>
    <Icon name="ios-arrow-back" size={35} color="#FFFFFF"/>
    </TouchableOpacity>
    </View>
    <View style={styles.Icon2}>
    <View style={styles.share}>
    <TouchableOpacity onPress={()=> this.shareHandler()}>
    <Icon name="ios-share" size={30} color="#000000"/>
    </TouchableOpacity>
    </View>
    </View>
    </View>
      <View style={styles.CaptionHolder}>
      <Text style={styles.Caption}>
      {itemId.caption}
      </Text>
      </View>
    </ImageBackground>

    </View>
    <View style={styles.Content}>
    <View style={styles.TagDateholder}>
    <View style={styles.Tag}>
    <Text style={styles.Text}>
    {itemId.tag}
    </Text>
    </View>
    <View style={styles.Date}>
    <Text style={styles.Text}>
    {itemId.date}
    </Text>
    </View>
    </View>
      
      <View style={styles.ContextHolder}>
      <Text style={styles.Context}>
            {itemId.context}
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
      backgroundColor:"#FFFFFF",
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
      color:"#FFFFFF"
    },
    Content:{
      flex:5,
      backgroundColor:"#FFFFFF"
    },
    TagDateholder:{
      flex:2,
      flexDirection:"row",
      justifyContent:"center",
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
      paddingHorizontal:10,
    },
    Context:{
      color:"#4A4A4A",
      fontSize:17
    }
    })
export default Article;