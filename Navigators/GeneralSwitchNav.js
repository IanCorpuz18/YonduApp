import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation';
import HomePage from '../screens/HomePage'
import MainDrawer from './MainDrawer'
import YonduSplashScreen from '../screens/SplashScreen/SplashScreen/'
import {SubscribeStack} from './'
const GeneralSwitchNav = createSwitchNavigator({
    YonduSplashScreen: YonduSplashScreen,
    HomePage: HomePage,
    MainDrawer:MainDrawer,
    SubscribeStack:SubscribeStack


})

export default GeneralSwitchNav;