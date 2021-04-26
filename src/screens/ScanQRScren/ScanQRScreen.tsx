import React, {useRef} from 'react';
import {styles} from './styles';
import {Dimensions, Linking, View, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Props from './types';
import {BackArrowSvg} from '../../assets/icons';

const SettingsScreen = (props: Props) => {
  const id = '1234'; // user id
  const scanner = useRef(null);

  const goBack = () => {
    props.navigation.goBack();
  };

  const onSuccess = e => {
    console.log('success');
    console.log(e);
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
    props.navigation.goBack();
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
