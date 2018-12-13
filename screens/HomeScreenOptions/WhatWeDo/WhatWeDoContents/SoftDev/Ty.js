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
        <CustomButton onPress={() => this.props.navigation.navigate('HomePage')}>Back To Home</CustomButton>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor:"white"
    },
    ImageHolder:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"

    },
    })
export default Ty;