import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

const navigationRef = React.createRef<NavigationContainerRef>();

const navigateTo = (routeName: string, params?: any) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(routeName, params);
  }
};

const navigateBack = () => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};

export {navigationRef, navigateTo, navigateBack};
