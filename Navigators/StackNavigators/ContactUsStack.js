import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import ContactUs from '../../screens/HomeScreenOptions/ContactUs/ContactUs'
const ContactUsStack = createStackNavigator({
    ContactUs:{
      screen:ContactUs,
      navigationOptions: ({navigation}) =>  {
        return{ 
            header:null
    }}
    },
},
{   initialRouteName:("ContactUs"),
    
    headerLayoutPreset:"center",
}
)
export default ContactUsStack;
