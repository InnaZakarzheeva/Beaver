import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import Props from './types';

import Logo from '../../assets/img/logo.png';
import {AuthRepository} from '../../services/repository';

const SplashScreen = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      AuthRepository.getTokenFromLocalStorage()
        .then(data => {
          if (data) {
            props.navigateToHome();
          } else {
            props.hideSplashScreen();
          }
        })
        .catch(() => {
          props.hideSplashScreen();
        });
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

export default SplashScreen;
