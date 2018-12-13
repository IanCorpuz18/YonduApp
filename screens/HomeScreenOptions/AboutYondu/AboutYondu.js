import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import LocalImage from '../../../components/LocalImage'
   class AboutYondu extends Component{
     render(){
    return(
    <View style={styles.Container} >
    <ScrollView style={{width:"100%"}} >
            <View style={styles.Header}>
            <Text style={styles.HeadText}>
                We create. We innovate. We are the Philippines’ leading IT solutions that specializes in turning big ideas into happier technological experiences.	
            </Text>
            </View>
            <View style={styles.Content}>
            <Text style={styles.Context}>
        Founded in 2001, Yondu has since established itself as a topnotch IT solutions provider in the Philippines- connecting the archipelago through creative digital innovation.

            </Text>
            <Text style={styles.Context}>
                Our experienced IT professionals confidently guide companies through today’s complex technological landscape.&nbsp;We don’t just put our clients on the map. Using the power of technology, we help them stay there, too.
            </Text>
            <Text style={styles.Context}>
        Backed by top tech company Xurpas and telco giant, Globe Telecom, Inc., Yondu has all the tools to transform your big ideas into reality with the most efficient strategies. May it be web, mobile, software development or systems integration, we got you all covered.
    </Text>
    <Text style={styles.Context}>
    Yondu’s extensive portfolio shows our seamless collaboration with business partners from the fields of technology, retail, and real estate. It also shows how we care for our partners, and our hunger to deliver service that is cut above the rest.
    </Text>
    
           </View>
           <View style={styles.LogoHolder}>
           <View style={styles.logo}>
           <LocalImage 
            source={require("../../../assets/xurpas.png")} 
            value={250}
            originalWidth={298}
            originalHeight={169}
           />
           </View>
           <View style={styles.logo2}>
           <LocalImage 
            source={require('../../../assets/globe.png')} 
            value={250}
            originalWidth={310}
            originalHeight={162}
           />
           </View>
           </View>
           </ScrollView>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        // flex:1,
        backgroundColor:"white"
    },
    Header:{
        // flex:4,
        height:"20%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        // margin:20,
        // backgroundColor:"green"
    },
    Content:{
        // flex:4,
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:20,
    },
    HeadText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000000",
        width:"78%",
        textAlign:"center"
    },
    Context:{
        fontSize:20,
        color:"#95999E",
        paddingBottom:5,
        width:"100%",
        // textAlign:"left",
    },
    LogoHolder:{
flex:1,
height:200,
flexDirection:"row",
    }, 
    logo:{
        flex:1,
    },
    logo2:{
        flex:1,
        paddingLeft:"20%"
    }
    })
export default AboutYondu;