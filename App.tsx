import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator, {navigationRef} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/state';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {parseURL} from './src/services/helpers';

const INVITE_LINK = 'https://beaverapp.com/invite';

const App = () => {
  const handleDynamicLink = (link: {url: string}) => {
    if (link.url.includes(INVITE_LINK)) {
      const params = parseURL(link.url);
      if (params.id) {
        navigationRef.current?.navigate('ChatScreen', {id: params.id});
      }
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link) {
          handleDynamicLink(link);
        }
      });
  }, []);

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
