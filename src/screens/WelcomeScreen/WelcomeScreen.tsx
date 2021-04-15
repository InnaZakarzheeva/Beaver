import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Button} from '../../components';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bubblesWrapper}>
        <Neomorph style={{...styles.bubble, ...styles.leftBubble}}>
          <Text style={styles.text}>{strings.welcomeText1}</Text>
        </Neomorph>
        <Neomorph inner style={{...styles.bubble, ...styles.rightBubble}}>
          <Text style={styles.text}>{strings.welcomeText2}</Text>
        </Neomorph>
      </View>
      <Button
        title={strings.createProfile}
        style={styles.button}
        titleStyle={styles.text}
        wrapperStyle={styles.buttonWrapper}
      />
    </View>
  );
};

export default WelcomeScreen;
