import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  InputToolbar,
  Composer,
  Send,
  InputToolbarProps,
  ComposerProps,
  SendProps,
  IMessage,
} from 'react-native-gifted-chat';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import {Colors} from '../../../../assets/colors';
import {SendSvg} from '../../../../assets/icons';
import Margins from '../../../../assets/margins';

const styles = StyleSheet.create({
  inputToolbar: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: Margins.marginsSmall,
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Margins.marginsSmall,
  },
  lightShadow: {
    width: Dimensions.get('screen').width - 50,
    height: 40,
    borderRadius: 10,
  },
  darkShadow: {
    width: Dimensions.get('screen').width - 50,
    height: 40,
    borderRadius: 10,
  },
  textInput: {
    width: '95%',
    textAlign: 'left',
    alignSelf: 'center',
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    width:
      Dimensions.get('screen').width -
      Margins.buttonSize -
      Margins.marginsSmall * 2,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const InputToolbarComponent = (props: InputToolbarProps) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        ...styles.inputToolbar,
        backgroundColor: Colors.primary,
      }}
      renderComposer={(composerProps: ComposerProps) => (
        <NeomorphFlex inner style={styles.bubble}>
          <Composer
            {...composerProps}
            textInputStyle={{...styles.textInput, color: Colors.accent}}
          />
        </NeomorphFlex>
      )}
      renderSend={(sendProps: SendProps<IMessage>) => (
        <Send {...sendProps} containerStyle={styles.sendButton}>
          <SendSvg />
        </Send>
      )}
    />
  );
};

export default InputToolbarComponent;
