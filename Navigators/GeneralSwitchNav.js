
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation';  
import React, {Component} from 'react';
import FrontPage from '../screens/FrontPage'
import HomePage from '../screens/HomePage'
import MainDrawer from './MainDrawer'
import {SubscribeStack,IndustriesStack} from './'
const GeneralSwitchNav = createSwitchNavigator({
    FrontPage: FrontPage,
    HomePage: HomePage,
    MainDrawer:MainDrawer,
    SubscribeStack:SubscribeStack


})

export default GeneralSwitchNav;