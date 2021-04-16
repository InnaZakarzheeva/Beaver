import React from 'react';
import {Modal, View, Text} from 'react-native';
import {Button} from '..';
import Margins from '../../assets/margins';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import {WarningSvg} from '../../assets/icons';
import styles from './styles';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onPress: () => void;
}

const ExitModal = (props: Props) => {
  return (
    <Modal
      presentationStyle="overFullScreen"
      onRequestClose={props.onCancel}
      visible={props.visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade">
      <View style={styles.modalBg}>
        <View style={styles.content}>
          <Neomorph style={styles.bubble}>
            <Neomorph inner style={styles.bubble}>
              <WarningSvg />
              <Text style={styles.text}>{strings.deleteData}</Text>
            </Neomorph>
          </Neomorph>
          <View style={styles.btnsContainer}>
            <Button
              title={strings.cancel}
              onPress={props.onCancel}
              borderRadius={20}
              width={115}
              height={Margins.buttonSize}
              titleStyle={styles.btnTitle}
              style={styles.btn}
            />
            <View style={styles.separator} />
            <Button
              title={strings.exit}
              onPress={props.onPress}
              borderRadius={20}
              width={115}
              height={Margins.buttonSize}
              titleStyle={styles.btnTitle}
              style={styles.btn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExitModal;
