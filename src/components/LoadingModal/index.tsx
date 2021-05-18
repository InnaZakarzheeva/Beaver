import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import styles from './styles';

interface Props {
  visible: boolean;
}

const LoadingModal = (props: Props) => {
  return (
    <Modal
      presentationStyle="overFullScreen"
      visible={props.visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade">
      <View style={styles.modalBg}>
        <View style={styles.content}>
          <Neomorph style={styles.bubble}>
            <Neomorph inner style={styles.bubble}>
              <ActivityIndicator size="large" />
            </Neomorph>
          </Neomorph>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
