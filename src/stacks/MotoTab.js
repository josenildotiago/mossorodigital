
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import MotoTabBar from '../components/MotoTabBar';

import Moto from '../screens/Moto';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={(props) => <MotoTabBar {...props} />}
  screenOptions={{
    headerShown: false
  }}
  >
    <Tab.Screen name="Moto" component={Moto} />
  </Tab.Navigator>
);