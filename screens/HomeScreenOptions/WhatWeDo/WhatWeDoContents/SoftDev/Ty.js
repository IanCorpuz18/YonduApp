import React, { Component } from 'react'
import {View,Text,StyleSheet,  Image} from 'react-native'
import LocalImage from '../../../../../components/LocalImage';
import CustomButton from '../../../../../components/CustomButton';
import TitleAndSub from '../../../../../components/TitleandSub';
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
        <TitleAndSub
        marginTop={{flex:1,
        justifyContent:"flex-start",
    }}
        newFlex={{
            flex:0,
            justifyContent:"flex-start"
        }}
        subWidth={{
             flex:0,
             width:"45%"
            }}
            Title={"Thank you for your inquiry"}
            Subtitle={"Your message has been sent successfully"}
        />
        <CustomButton onPress={() => this.props.navigation.navigate('HomePage')}>Back To Home</CustomButton>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    ImageHolder:{
        flex:2,
        justifyContent:"flex-end",
        alignItems:"center"

    },
    TitleSubHolder:{
     
    },
    Subtitle:{
     
    }
    })
export default Ty;