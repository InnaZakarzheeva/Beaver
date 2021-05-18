import React, {useEffect, useRef} from 'react';
import {styles} from './styles';
import {Dimensions, Linking, View, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Props from './types';
import {BackArrowSvg} from '../../assets/icons';

const SettingsScreen = (props: Props) => {
  const scanner = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('ChatScreen', {
        id: '1hiy7tvlkotvhs6v',
      });
    }, 2000);
  }, []);

  const goBack = () => {
    props.navigation.goBack();
  };

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
    props.navigation.navigate('ChatScreen', {
      id: e.data,
    });
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        ref={scanner}
        cameraType="back"
        showMarker
        topContent={
          <TouchableOpacity onPress={goBack} style={styles.backBtn}>
            <BackArrowSvg />
          </TouchableOpacity>
        }
        cameraStyle={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}
      />
    </View>
  );
};

export default SettingsScreen;
