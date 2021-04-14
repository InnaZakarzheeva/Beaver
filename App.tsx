import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator, {navigationRef} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/state';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar
          translucent={true}
          hidden={false}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
