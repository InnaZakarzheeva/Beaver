import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Colors} from '../../assets/colors';
import Margins from '../../assets/margins';
import strings from '../../assets/strings';

const {width} = Dimensions.get('screen');

interface Props {
  chat: {
    id: string;
    name: string;
  };
}

const styles = StyleSheet.create({
  bubble: {
    shadowRadius: 5,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    width: width - Margins.marginsSmall * 2,
    height: Margins.containerSize,
    alignItems: 'center',
    marginBottom: Margins.marginsSmall,
    flexDirection: 'row',
  },
  avatar: {
    shadowRadius: 5,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    width: Margins.marginsDefault,
    height: Margins.marginsDefault,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Margins.marginMiddle,
  },
  text: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
});

const ConversationItem = (props: Props) => {
  return (
    <Neomorph inner style={styles.bubble}>
      <Neomorph style={styles.avatar}>
        <Text style={styles.text}>
          {props.chat.name.length
            ? props.chat.name.charAt(0)
            : props.chat.id.charAt(0)}
        </Text>
      </Neomorph>
      <Text style={styles.text}>
        {props.chat.name.length ? props.chat.name : strings.unnamedChat}
      </Text>
    </Neomorph>
  );
};

export default ConversationItem;
