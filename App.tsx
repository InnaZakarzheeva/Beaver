import React, {useEffect} from 'react';
import {Linking, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator, {navigationRef} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/state';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        if (url) {
          navigate(url);
        }
      });
    } else {
      Linking.addEventListener('url', handleOpenURL);
    }

    return () => {
      Linking.removeEventListener('url', handleOpenURL);
    };
  }, []);

  const handleOpenURL = (event: {url: string}) => {
    navigate(event.url);
  };

  const navigate = (url: string) => {
    const route = url.replace(/.*?:\/\//g, '');
    const parsedUrl = route.match(/\/([^\/]+)\/?$/);
    if (parsedUrl && parsedUrl[1]) {
      const routeName = route.split('/')[0];
      if (routeName === 'chat') {
        navigationRef.current?.reset({
          index: 0,
          routes: [
            {name: 'ListOfChats'},
            {name: 'ChatScreen', params: {id: parsedUrl[1]}},
          ],
        });
      }
    }
  };

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
