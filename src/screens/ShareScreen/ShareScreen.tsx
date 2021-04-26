import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import QRCode from 'react-native-qrcode-svg';
import {Button} from '../../components';
import Props from './types';
import Share, {ShareOptions} from 'react-native-share';

const ShareScreen = (props: Props) => {
  const id = '1234'; // user id

  const shareUserId = async () => {
    const options: ShareOptions = {
      title: 'Invitation to Beaver App',
      message: `beaverapp://chat/${id}`,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const navigateToMain = () => {
    props.navigation.navigate('ListOfChats');
  };

  return (
    <View style={styles.container}>
      <Neomorph inner style={styles.bubble}>
        <Text style={styles.text}>{strings.showQR}</Text>
      </Neomorph>
      <View style={styles.qrWrapper}>
        <QRCode size={250} value={`beaverapp://chat/${id}`} />
      </View>

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
