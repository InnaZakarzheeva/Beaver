import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import QRCode from 'react-native-qrcode-svg';
import {Button} from '../../components';
import Props from './types';
// import dynamicLinks from '@react-native-firebase/dynamic-links';

const ShareScreen = (props: Props) => {
  const shareUserId = async () => {
    // const id = '1234';
    // const link = await dynamicLinks().buildLink({
    //   link: `https://beaverapp.com/invite?id=${id}`,
    //   domainUriPrefix: 'https://beaverapp.page.link',
    //   social: {
    //     title: 'Invitation to Beaver App',
    //     descriptionText: 'Follow the link to start chatting :)',
    //   },
    //   android: {
    //     packageName: 'com.beaver',
    //   },
    // });
    // return link;
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
        <QRCode size={250} value={'test-test'} />
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
