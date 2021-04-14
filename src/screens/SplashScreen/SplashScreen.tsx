import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import Props from './types';

import Logo from '../../assets/img/logo.png';

const SplashScreen = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      props.hideSplashScreen();
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

export default SplashScreen;
