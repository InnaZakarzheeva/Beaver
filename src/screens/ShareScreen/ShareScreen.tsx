import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import QRCode from 'react-native-qrcode-svg';
import {Button} from '../../components';
import Props from './types';

const ShareScreen = (props: Props) => {
  const shareUserId = () => {
    return;
  };
  const navigateToMain = () => {
    props.navigation.navigate('ListOfChats');
  };
  return (
    <View style={styles.container}>
      <Neomorph inner style={styles.bubble}>
        <Text style={styles.text}>{strings.showQR}</Text>
      </Neomorph>
      {/* QrCode */}
      {/* <View style={{ marginTop: 250 }}>
        <QRCode size={250} value={'test-test'} />
      </View> */}

      <View style={styles.btnContainer}>
        <Button
          title={strings.shareTo}
          style={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={shareUserId}
        />
        <View style={styles.separator} />
        <Button
          title={strings.continue}
          style={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={navigateToMain}
        />
      </View>
    </View>
  );
};

export default ShareScreen;
