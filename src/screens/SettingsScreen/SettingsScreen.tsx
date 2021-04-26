import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import QRCode from 'react-native-qrcode-svg';
import Props from './types';
import {BackArrowSvg} from '../../assets/icons';

const SettingsScreen = (props: Props) => {
  const id = '1234'; // user id

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Neomorph inner style={styles.bubble}>
        <TouchableOpacity onPress={goBack} style={styles.backBtn}>
          <BackArrowSvg />
        </TouchableOpacity>
        <Text style={styles.text}>{strings.showQR}</Text>
      </Neomorph>
      <View style={styles.qrWrapper}>
        <QRCode size={250} value={`beaverapp://chat/${id}`} />
      </View>
    </View>
  );
};

export default SettingsScreen;
