import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Industries from '../screens/HomeScreenOptions/Industries/Industries'
const IndustriesStack = createStackNavigator({
    Industries:{
      screen:Industries,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"black",
        title: "Industries",
        headerStyle:{
            backgroundColor:"white",
  
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="black" style={{marginLeft:10}}/>,
        
    }}
    },
},
    
{   initialRouteName:("Industries"),
    
    headerLayoutPreset:"center",
    // headerMode:"none"
}
    
)
export default IndustriesStack;
