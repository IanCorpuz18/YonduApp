
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation';  
import React, {Component} from 'react';
import FrontPage from '../screens/FrontPage'
import HomePage from '../screens/HomePage'
import WhatWeDoDrawer from './WhatWeDoDrawer'

export default GeneralSwitchNav = createSwitchNavigator({
    FrontPage: FrontPage,
    HomePage: HomePage,
    WhatWeDoDrawer:WhatWeDoDrawer


})