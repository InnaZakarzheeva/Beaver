import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Neomorph, NeomorphFlex} from 'react-native-neomorph-shadows';
import {
  BubbleProps,
  GiftedChat,
  IMessage,
  InputToolbarProps,
  MessageText,
  MessageTextProps,
} from 'react-native-gifted-chat';
import Props from './types';
import {MessageBubble, InputToolBarComponent} from './components';
import {BackArrowSvg} from '../../assets/icons';

const ChatScreen = (props: Props) => {
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  const renderBubble = (bubbleProps: BubbleProps<IMessage>) => (
    <MessageBubble {...bubbleProps} />
  );

  const renderInputToolbar = (inputProps: InputToolbarProps) => (
    <InputToolBarComponent {...inputProps} />
  );

  const renderMessageText = (messageProps: MessageTextProps<IMessage>) => {
    const {currentMessage} = messageProps;
    const id = currentMessage?.user._id;
    switch (id) {
      case 1:
        return (
          <NeomorphFlex inner style={styles.bubble}>
            <MessageText {...messageProps} />
          </NeomorphFlex>
        );
      case 2:
        return (
          <NeomorphFlex style={styles.bubble}>
            <MessageText {...messageProps} />
          </NeomorphFlex>
        );
      default:
        return <MessageText {...messageProps} />;
    }
  };

  const onSend = (message: Array<IMessage>) => {
    setMessages(messages.concat(message));
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Neomorph style={{...styles.header, ...styles.outterHeader}}>
        <Neomorph inner style={{...styles.header, ...styles.innerHeader}}>
          <TouchableOpacity onPress={goBack} style={styles.backBtn}>
            <BackArrowSvg />
          </TouchableOpacity>
          <Text style={styles.title}>{props.route.params?.id || 'Chat'}</Text>
        </Neomorph>
      </Neomorph>
      <GiftedChat
        messages={messages}
        onSend={message => onSend(message)}
        renderAvatar={() => null}
        alwaysShowSend
        renderBubble={renderBubble}
        renderMessageText={renderMessageText}
        renderInputToolbar={renderInputToolbar}
        renderTime={() => null}
        renderDay={() => null}
        // loadEarlier={canLoadMore}
        // isLoadingEarlier={isLoading}
        // onLoadEarlier={this.onLoadEarlier}
        minInputToolbarHeight={60}
        maxComposerHeight={40}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatScreen;
