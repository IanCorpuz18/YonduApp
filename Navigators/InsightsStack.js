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
            backgroundColor:"white",
  
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="black" style={{marginLeft:10}}/>,
        
    }}
    },Article:{
        screen:Article,
        navigationOptions: ({navigation}) =>  {
          return{ 
          
          headerTintColor:"black",
        //   title: "Industries",
          headerStyle:{
              backgroundColor:"transparent",
    
          }, 
          headerRight:
          <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center"}}><Icon name="ios-share" onPress={() => navigation.openDrawer()}
          size={30} color="black" style={{marginLeft:10}}/></View>,
          headerLeft:
              <Icon name="ios-arrow-back" onPress={() => navigation.navigate('Insights')}
              size={30} color="white" style={{marginLeft:10}}/>,
          
      }}
      }
},
    
{   initialRouteName:("Insights"),
    
    headerLayoutPreset:"center",
    // headerMode:"none"
}
    
)
export default InsightsStack;
