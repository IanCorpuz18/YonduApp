import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import SoftDevStack from './SoftDevStack'
import { SoftDev,GetQuote,Ty } from '../../screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev'
import WhatWeDo from '../../screens/HomeScreenOptions/WhatWeDo/WhatWeDo'
import { CyberSec,EnterpriseSol,ItStaffing,ManagedServices,TrainingsAndDev } from '../../screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents'
const WhatWeDoStack = createStackNavigator({
    WhatWeDo:{
      screen:WhatWeDo,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"white",
        title: "What We Do",
        headerStyle:{
            backgroundColor:"#66CD9A",
  
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="white" style={{marginLeft:10}}/>,
        
    }}
    },
    SoftDev:{
        screen:SoftDev,
        navigationOptions: ({navigation}) =>  {
          return{ 
          
          headerTintColor:"white",
          title: "Software Development",
          headerStyle:{
              backgroundColor:"#66CD9A",
    
          },
          headerLeft:
              <Icon name="md-arrow-back" onPress={() => navigation.goBack()}
              size={30} color="white" style={{marginLeft:10}}/>,
          
      }}
      },
      Ty:{
        screen:Ty,
        navigationOptions: ({navigation}) =>  {
          return{ 
          
          headerTintColor:"white",
          title: "Software Development",
          headerStyle:{
              backgroundColor:"#66CD9A",
    
          },
          headerLeft:
          <Icon name="md-arrow-back" onPress={() => navigation.goBack()}
              size={30} color="white" style={{marginLeft:10}}/>,
          
      }}
      }, GetQuote:{
        screen:GetQuote,
        navigationOptions: ({navigation}) =>  {
          return{ 
          
          headerTintColor:"white",
          title: "Get a Quote",
          headerStyle:{
              backgroundColor:"#2FD095",
    
          },
          headerLeft:
          <Icon name="ios-arrow-back" onPress={() => navigation.navigate('WhatWeDo')}
              size={30} color="white" style={{marginLeft:10}}/>,
          
      }}
      },
    ManagedServices:{
        screen:ManagedServices,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"white",
          title: "WebAppDev",
          headerStyle:{
              backgroundColor:"#66CD9A",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="white" style={{marginRight:10}}/>,
          
      }}
      },
      ItStaffing:{
        screen:ItStaffing,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"white",
          title: "Enterprise Solution",
          headerStyle:{
              backgroundColor:"#66CD9A",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="white" style={{marginRight:10}}/>,
          
      }}
      },
      CyberSec:{
        screen:CyberSec,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"white",
          title: "System Integration",
          headerStyle:{
              backgroundColor:"#66CD9A",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="white" style={{marginRight:10}}/>,
          
      }}
      },
      TrainingsAndDev:{
        screen:TrainingsAndDev,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"white",
          title: "Mobile Application Development",
          headerStyle:{
              backgroundColor:"#66CD9A",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="white" style={{marginRight:10}}/>,
          
      }}
      },    EnterpriseSol:{
        screen:EnterpriseSol,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"white",
          title: "Mobile Application Development",
          headerStyle:{
              backgroundColor:"#66CD9A",
    
          },
          headerLeft:
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="white" style={{marginRight:10}}/>,
          
      }}
      }
},
    
{   initialRouteName:("WhatWeDo"),
    
    headerLayoutPreset:"center",
}
    
)
export default WhatWeDoStack;
