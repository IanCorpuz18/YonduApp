import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import AboutYondu from '../../screens/HomeScreenOptions/AboutYondu/AboutYondu'
import Industries from '../../screens/HomeScreenOptions/Industries/Industries'
const AboutYonduStack = createStackNavigator({
    AboutYondu:{
      screen:AboutYondu,
      navigationOptions: ({navigation}) =>  {
        return{ 
        
        headerTintColor:"white",
        title: "About Yondu",
        headerStyle:{
            backgroundColor:"#66CD9A",
  
        },
        headerLeft:
            <Icon name="ios-arrow-back" onPress={() => navigation.navigate('HomePage')}
            size={30} color="#FFFFFF" style={{marginLeft:10}}/>,
        
    }}
    },
},
    
{   initialRouteName:("AboutYondu"),
    
    headerLayoutPreset:"center",
    // headerMode:"none"
}
    
)
export default AboutYonduStack;
