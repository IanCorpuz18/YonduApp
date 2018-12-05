import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import LocalImage from '../components/LocalImage'
   class FrontPage extends Component{
     render(){
    return(
    <View style={styles.Container}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')}>
        <LocalImage
         source={require('../assets/yondu.jpg')} 
         originalWidth={361}
         originalHeight={79}
        />
        </TouchableOpacity>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }

    })
export default FrontPage;