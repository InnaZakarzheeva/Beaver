import React from 'react';
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import {Button} from '..';
import {PlusSvg} from '../../assets/icons';
import Margins from '../../assets/margins';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import styles from './styles';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onPressRename: () => void;
  onPressDelete: () => void;
}

const OptionsModal = (props: Props) => {
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
          <TouchableOpacity onPress={props.onCancel} style={styles.closeBtn}>
            <PlusSvg size={20} />
          </TouchableOpacity>
          <Neomorph style={styles.bubble}>
            <Neomorph inner style={styles.innerBubble}>
              <Text style={styles.title}>{strings.whatToDo}</Text>
            </Neomorph>
          </Neomorph>
          <Button
            title={strings.renameChat}
            onPress={props.onPressRename}
            borderRadius={20}
            width={250}
            height={Margins.buttonSize}
            titleStyle={styles.btnTitle}
            style={styles.btn}
            wrapperStyle={styles.btnWrapper}
          />
          <Button
            title={strings.deleteChat}
            onPress={props.onPressDelete}
            borderRadius={20}
            width={250}
            height={Margins.buttonSize}
            titleStyle={styles.btnTitle}
            style={styles.btn}
          />
        </View>
      </View>
    </Modal>
  );
};

export default OptionsModal;
