import React from 'react';
import {Bubble} from 'react-native-gifted-chat';
import {Colors} from '../../../../assets/colors';

const MessageBubble = ({...props}) => (
  <Bubble
    {...props}
    wrapperStyle={{
      left: {
        padding: 5,
        backgroundColor: Colors.primary,
      },
      right: {
        padding: 5,
        backgroundColor: Colors.primary,
      },
    }}
    textStyle={{
      left: {
        color: Colors.accent,
      },
      right: {
        color: Colors.accent,
      },
    }}
    onLongPress={() => {}}
  />
);

export default MessageBubble;
