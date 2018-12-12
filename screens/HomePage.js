import React, { Component } from 'react'
import {View,StyleSheet, TouchableOpacity} from 'react-native'
import OptionsHolder from '../components/OptionsHolder'
import {HomeChoices} from '../Arrays/HomePageContent'
   class HomePage extends Component{
       state={
           ChoiceList:HomeChoices,
        Choice:""
       }
     render(){
    return(
    <View style={styles.Container}>
    {this.state.ChoiceList.map((item, key) => {
        return (
        <OptionsHolder key={key}  onPress={() => this.props.navigation.navigate(item.value)}>
        {item.name}</OptionsHolder>
        )
    })}
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{
        flex:1 
    },

    })
export default HomePage;