

import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import ContactUs from '../../screens/HomeScreenOptions/ContactUs/ContactUs'
import Subscribe from '../../screens/HomeScreenOptions/Subscribe/Subscribe'
const SubscribeStack = createStackNavigator({
    Subscribe:{
      screen:Subscribe,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
            headerTintColor:"white",
            title: "Subscribe with Email",
            headerStyle:{
                backgroundColor:"#66CD9A",
      
            },
            headerLeft:
                <Icon name="ios-arrow-back" onPress={() => navigation.navigate('HomePage')}
                size={30} color="white" style={{marginLeft:10}}/>,
        
    }}
    },
},
    
{   initialRouteName:("Subscribe"),
    
    headerLayoutPreset:"center",
    // headerMode:"none"
}
    
)
export default SubscribeStack;
