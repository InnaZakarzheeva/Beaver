import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Button} from '../../components';

const ShareScreen = () => {
  const shareUserId = () => {
    return;
  };
  return (
    <View style={styles.container}>
      <Neomorph inner style={styles.bubble}>
        <Text style={styles.text}>{strings.showQR}</Text>
      </Neomorph>
      {/* QrCode */}
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
        />
      </View>
    </View>
  );
};

export default ShareScreen;
