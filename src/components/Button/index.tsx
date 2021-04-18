import React, {useState} from 'react';
import {
  Pressable,
  ViewStyle,
  TextStyle,
  StyleProp,
  Text,
  Dimensions,
  View,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Colors} from '../../assets/colors';
import Margins from '../../assets/margins';

interface Props {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  height?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  icon?: Element;
  borderRadius?: number;
}

const Button = (props: Props) => {
  const [isClicked, setClicked] = useState(false);
  let height: number = props.height || 50;
  let width: number =
    props.width || Dimensions.get('screen').width - Margins.marginsDefault;

  const neomorphStyle = () => {
    return {
      shadowRadius: isClicked ? 1 : 5,
      borderRadius: props.borderRadius || 25,
      backgroundColor: Colors.primary,
      height,
      width,
    };
  };

  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={setClicked.bind(this, true)}
      onPressOut={setClicked.bind(this, false)}
      disabled={props.disabled}
      style={props.wrapperStyle}>
      <Neomorph style={neomorphStyle()}>
        <View style={props.style}>
          {props.icon}
          {props.title && <Text style={props.titleStyle}>{props.title}</Text>}
        </View>
      </Neomorph>
    </Pressable>
  );
};

export default Button;
