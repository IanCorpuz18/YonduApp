import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import LocalImage from '../components/LocalImage'
   class FrontPage extends Component{
     render(){
    return(
    <View style={styles.Container}>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')}>
        <LocalImage
         source={require('../assets/yondu-small.png')} 
         value={150}
         originalWidth={200}
         originalHeight={41}
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
        backgroundColor:"#66CD9A"
    }

    })
export default FrontPage;