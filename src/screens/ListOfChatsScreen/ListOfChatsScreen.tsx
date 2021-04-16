import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import strings from '../../assets/strings';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Button} from '../../components';
import Margins from '../../assets/margins';
import {ExitSvg, MoonSvg, PlusSvg} from '../../assets/icons';

const ListOfChatsScreen = () => {
  const onExit = () => {
    return;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Neomorph style={styles.bubble}>
          <Text style={styles.text}>{strings.chats}</Text>
        </Neomorph>
        <Button
          wrapperStyle={styles.iconBtn}
          style={styles.iconWrapper}
          icon={<MoonSvg />}
          width={Margins.buttonSize}
          height={Margins.buttonSize}
          borderRadius={15}
          disabled // change theme
        />
        <Button
          wrapperStyle={styles.iconBtn}
          style={styles.iconWrapper}
          icon={<ExitSvg />}
          width={Margins.buttonSize}
          height={Margins.buttonSize}
          borderRadius={15}
          onPress={onExit}
        />
      </View>

      <Button
        wrapperStyle={styles.addBtnWrapper}
        style={styles.addBtn}
        icon={<PlusSvg />}
        width={60}
        height={60}
        borderRadius={50}
      />
    </View>
  );
};

export default ListOfChatsScreen;
