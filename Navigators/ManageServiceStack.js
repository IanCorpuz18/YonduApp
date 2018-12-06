import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import ManagedDeskService from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/ManageServiceContent/ManagedDeskService'
import ManageExpService from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/ManageServiceContent/ManageExpService'
import ManageSysAdmin from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/ManageServiceContent/ManageSysAdmin'
import AwsCloud from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/ManageServiceContent/AwsCloud'
import ManageAppService from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/ManageServiceContent/ManageAppService'
import ManageServices from '../screens/HomeScreenOptions/WhatWeDo/WhatWeDoDrawerContents/ManageServices'
export default ManageServiceStack = createStackNavigator({
    ManageServices:{
      screen:ManageServices,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"black",
        title: "ManageServices",
        headerStyle:{
            backgroundColor:"white",
  
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="black" style={{marginLeft:10}}/>,
        
    }}
    },
    ManagedDeskService:{
        screen:ManagedDeskService,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "ManagedDeskService",
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
      ManageExpService:{
        screen:ManageExpService,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "ManageExpService",
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
      ManageSysAdmin:{
        screen:ManageSysAdmin,
        navigationOptions: ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "ManageSysAdmin",
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
      ManageAppService:{
        screen:ManageAppService,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "ManageAppService",
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
      AwsCloud:{
        screen:AwsCloud,
        navigationOptions:  ({navigation}) =>  {
            return{ 
            
          headerTintColor:"black",
          title: "AwsCloud",
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
    
{   initialRouteName:("ManageServices"),
    
    headerLayoutPreset:"center",
}
    
)