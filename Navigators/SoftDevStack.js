import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { SoftDev,GetQuota,Ty } from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoContents/SoftDev'
const WhatWeDoStack = createStackNavigator({
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
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="black" style={{marginLeft:10}}/>,
        
    }}
    },
    GetQuota:{
        screen:GetQuota,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "Software Development",
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
          <Icon onPress={() => navigation.navigate('SoftDev')}
          name="md-arrow-back" size={30} color="black" style={{marginLeft:10}}/>,
          headerRight:
              <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
              size={30} color="black" style={{marginRight:10}}/>,
          
      }}
      },
},
    
{   initialRouteName:("SoftDev"),
    
    headerLayoutPreset:"center",
    // headerMode:"none"
}
    
)
export default WhatWeDoStack;
