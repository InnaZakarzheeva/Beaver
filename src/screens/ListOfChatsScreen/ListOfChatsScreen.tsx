import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  Button,
  ExitModal,
  ConversationItem,
  OptionsModal,
} from '../../components';
import Margins from '../../assets/margins';
import {ExitSvg, PlusSvg, SettingsSvg} from '../../assets/icons';
import Props from './types';

const chats = [
  {
    id: '5678',
    name: 'Conversation 1',
  },
  {
    id: '2222',
    name: '',
  },
];

const ListOfChatsScreen = (props: Props) => {
  const [isVisibleExit, setVisibleExit] = useState(false);
  const [isVisibleOptions, setVisibleOptions] = useState(false);
  const [currentChat, setCurrentChat] = useState<string | null>(null);

  const onExit = () => {
    setVisibleExit(false);
  };

  const navigateToChat = (id: string) => {
    props.navigation.navigate('ChatScreen', {id});
  };

  const openOptions = (id: string) => {
    setCurrentChat(id);
    setVisibleOptions(true);
  };

  const onDeleteChat = () => {
    setVisibleOptions(false);
    setCurrentChat(null);
    if (currentChat) {
      // delete...
    }
  };

  const onRenameChat = () => {
    setVisibleOptions(false);
    setCurrentChat(null);
    if (currentChat) {
      //rename...
    }
  };

  const navigateToShare = () => {
    props.navigation.navigate('ShareUserScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Neomorph style={styles.bubble}>
          <Neomorph inner style={styles.bubble}>
            <Text style={styles.text}>{strings.chats}</Text>
          </Neomorph>
        </Neomorph>
        <Button
          wrapperStyle={styles.iconBtn}
          style={styles.iconWrapper}
          icon={<SettingsSvg />}
          width={Margins.buttonSize}
          height={Margins.buttonSize}
          borderRadius={15}
        />
        <Button
          wrapperStyle={styles.iconBtn}
          style={styles.iconWrapper}
          icon={<ExitSvg />}
          width={Margins.buttonSize}
          height={Margins.buttonSize}
          borderRadius={15}
          onPress={setVisibleExit.bind(this, true)}
        />
      </View>

      <FlatList
        data={chats}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={navigateToChat.bind(this, item.id)}
            onLongPress={openOptions.bind(this, item.id)}>
            <ConversationItem chat={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.conversationsList}
      />

      <Button
        wrapperStyle={styles.addBtnWrapper}
        style={styles.addBtn}
        icon={<PlusSvg />}
        width={Margins.containerSize}
        height={Margins.containerSize}
        borderRadius={50}
        onPress={navigateToShare}
      />

      <ExitModal
        visible={isVisibleExit}
        onCancel={setVisibleExit.bind(this, false)}
        onPress={onExit}
      />

      <OptionsModal
        visible={isVisibleOptions}
        onCancel={setVisibleOptions.bind(this, false)}
        onPressDelete={onDeleteChat}
        onPressRename={onRenameChat}
      />
    </View>
  );
};

export default ListOfChatsScreen;
