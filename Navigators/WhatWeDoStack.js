import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import SoftDevStack from './SoftDevStack'
import { SoftDev,GetQuota,Ty } from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev'
import WhatWeDo from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDo'
import { CyberSec,EnterpriseSol,ItStaffing,ManagedServices,TrainingsAndDev } from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/'
const WhatWeDoStack = createStackNavigator({
    WhatWeDo:{
      screen:WhatWeDo,
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
    SoftDev:{
        screen:SoftDev,
        navigationOptions: ({navigation}) =>  {
          return{ 
          
          headerTintColor:"black",
          title: "Software Development",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
              <Icon name="md-arrow-back" onPress={() => navigation.goBack()}
              size={30} color="black" style={{marginLeft:10}}/>,
          
      }}
      },
      Ty:{
        screen:Ty,
        navigationOptions: ({navigation}) =>  {
          return{ 
          
          headerTintColor:"black",
          title: "Software Development",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
          <Icon name="md-arrow-back" onPress={() => navigation.goBack()}
              size={30} color="black" style={{marginLeft:10}}/>,
          
      }}
      }, GetQuota:{
        screen:GetQuota,
        navigationOptions: ({navigation}) =>  {
          return{ 
          
          headerTintColor:"black",
          title: "Software Development",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
          <Icon name="md-arrow-back" onPress={() => navigation.goBack()}
              size={30} color="black" style={{marginLeft:10}}/>,
          
      }}
      },
    ManagedServices:{
        screen:ManagedServices,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "WebAppDev",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginRight:10}}/>,
          
      }}
      },
      ItStaffing:{
        screen:ItStaffing,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "Enterprise Solution",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginRight:10}}/>,
          
      }}
      },
      CyberSec:{
        screen:CyberSec,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "System Integration",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginRight:10}}/>,
          
      }}
      },
      TrainingsAndDev:{
        screen:TrainingsAndDev,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "Mobile Application Development",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginRight:10}}/>,
          
      }}
      },    EnterpriseSol:{
        screen:EnterpriseSol,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "Mobile Application Development",
          headerStyle:{
              backgroundColor:"white",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginRight:10}}/>,
          
      }}
      }
},
    
{   initialRouteName:("WhatWeDo"),
    
    headerLayoutPreset:"center",
}
    
)
export default WhatWeDoStack;