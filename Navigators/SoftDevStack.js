import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import SoftDev from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/SoftDev'
import WebAppDev from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/SoftDevContents/WebAppDev'
import MobAppDev from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/SoftDevContents/MobAppDev'
import EnterpriseSol from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/SoftDevContents/EnterpriseSol'
import SystemInt from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/SoftDevContents/SystemInt'
export default SoftDevStack = createStackNavigator({
    SoftDev:{
      screen:SoftDev,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"black",
        title: "What We Do",
        headerStyle:{
            backgroundColor:"white",
  
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="black" style={{marginLeft:10}}/>,
        
    }}
    },
    WebAppDev:{
        screen:WebAppDev,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "WebAppDev",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginLeft:10}}/>,
          
      }}
      },
      EnterpriseSol:{
        screen:EnterpriseSol,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "Enterprise Solution",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginLeft:10}}/>,
          
      }}
      },
      SystemInt:{
        screen:SystemInt,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "System Integration",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginLeft:10}}/>,
          
      }}
      },
      MobAppDev:{
        screen:MobAppDev,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "Mobile Application Development",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginLeft:10}}/>,
          
      }}
      }
},
    
{   initialRouteName:("SoftDev"),
    
    headerLayoutPreset:"center",
}
    
)