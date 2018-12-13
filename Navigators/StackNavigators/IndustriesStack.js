import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Industries from '../../screens/HomeScreenOptions/Industries/Industries'
const IndustriesStack = createStackNavigator({
    Industries:{
      screen:Industries,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"#FFFFFF",
        title: "Industries",
        headerStyle:{
            backgroundColor:"#66CD9A",
        },
        headerLeft:
            <Icon name="ios-arrow-back" onPress={() => navigation.navigate('HomePage')}
            size={30} color="#FFFFFF" style={{marginLeft:10}}/>,
    }}
    },
},
{   initialRouteName:("Industries"),
    headerLayoutPreset:"center",
}
)
export default IndustriesStack;
