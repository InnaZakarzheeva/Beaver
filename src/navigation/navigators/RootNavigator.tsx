import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {
  ChatScreen,
  ListOfChatsScreen,
  SettingsScreen,
  ShareScreen,
  SplashScreen,
  WelcomeScreen,
  ScanQRScreen,
} from '../../screens';
import {Props} from './index';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = (props: Props) => {
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="SplashScreen">
      {props.splashShown ? (
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <>
          <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <RootStack.Screen name="ShareUserScreen" component={ShareScreen} />
          <RootStack.Screen name="ListOfChats" component={ListOfChatsScreen} />
          <RootStack.Screen name="ChatScreen" component={ChatScreen} />
          <RootStack.Screen name="SettingsScreen" component={SettingsScreen} />
          <RootStack.Screen name="ScanQRScreen" component={ScanQRScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
