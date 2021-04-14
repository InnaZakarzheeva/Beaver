import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {SplashScreen} from '../screens';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="SplashScreen">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
