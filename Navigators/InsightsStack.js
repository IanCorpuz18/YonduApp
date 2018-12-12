import React,{ Component }  from 'react'

import {View,Text,StyleSheet} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Article from '../screens/HomeScreenOptions/Insights/InsightsContent/Article'
import Icon from 'react-native-vector-icons/Ionicons'
import Insights from '../screens/HomeScreenOptions/Insights/Insights'
const InsightsStack = createStackNavigator({
    Insights:{
      screen:Insights,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"black",
        title: "Insights",
        headerStyle:{
            backgroundColor:"#66CD9A",
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="black" style={{marginLeft:10}}/>,
        
    }}
    },Article:{
        screen:Article,
        navigationOptions: ({navigation}) =>  {
            
          return{ 
            header:null
          
      }}
      }
},
    
{   initialRouteName:("Insights"),
    
    headerLayoutPreset:"center",
    // headerMode:"none"
}
    
)
export default InsightsStack;
