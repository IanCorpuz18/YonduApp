import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import {GetQuote,Ty } from '../../screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev'
import WhatWeDo from '../../screens/HomeScreenOptions/WhatWeDo/WhatWeDo'
import { CyberSec,EnterpriseSol,ItStaffing,ManagedServices,TrainingsAndDev } from '../../screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents'
const WhatWeDoStack = createStackNavigator({
    WhatWeDo:{
      screen:WhatWeDo,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"#FFFFFF",
        title: "What We Do",
        headerStyle:{
            backgroundColor:"#66CD9A",
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="#FFFFFF" style={{marginLeft:10}}/>,
    }}
    },
      Ty:{
        screen:Ty,
        navigationOptions: ({navigation}) =>  {
          return{ 
          headerTintColor:"#FFFFFF",
          title: "Software Development",
          headerStyle:{
              backgroundColor:"#66CD9A",
          },
          headerLeft:
          <Icon name="md-arrow-back" onPress={() => navigation.goBack()}
              size={30} color="#FFFFFF" style={{marginLeft:10}}/>,
      }}
      }, GetQuote:{
        screen:GetQuote,
        navigationOptions: ({navigation}) =>  {
          return{ 
          headerTintColor:"#FFFFFF",
          title: "Get a Quote",
          headerStyle:{
              backgroundColor:"#2FD095",
          },
          headerLeft:
          <Icon name="ios-arrow-back" onPress={() => navigation.navigate('WhatWeDo')}
              size={30} color="#FFFFFF" style={{marginLeft:10}}/>,
      }}
      },
},
{   initialRouteName:("WhatWeDo"),
    headerLayoutPreset:"center",
}
)
export default WhatWeDoStack;
