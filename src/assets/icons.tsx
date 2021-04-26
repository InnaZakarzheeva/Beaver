import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import Svg, {Color, NumberProp, Path, Line} from 'react-native-svg';
import {Colors} from './colors';

export interface SvgProps {
  color?: Color | ColorValue;
  opacity?: NumberProp;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const MoonSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 40}
      height={props.size || 40}
      viewBox="0 0 40 40"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.6918 6.79866C23.839 7.28312 24.9203 7.94133 25.9195 8.79233C31.1726 13.2662 31.805 21.1605 27.3312 26.4135C22.8573 31.6666 14.963 32.299 9.70995 27.8252C8.71073 26.9742 7.88876 26.0115 7.22784 24.956C12.1208 27.038 17.9904 25.814 21.6213 21.5507C25.2522 17.2873 25.5261 11.2978 22.6918 6.79866ZM25.4279 24.7926C27.9242 21.8615 28.4309 17.8928 27.0821 14.5604C26.8505 17.647 25.6562 20.6688 23.5246 23.1716C21.393 25.6745 18.5999 27.3347 15.5895 28.0547C19.0942 28.8557 22.9316 27.7237 25.4279 24.7926Z"
        fill={Colors.accent}
      />
    </Svg>
  );
};

const ExitSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 30}
      height={props.size || 30}
      viewBox="0 0 30 30"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.25 3.75H23.75C25.125 3.75 26.25 4.875 26.25 6.25V23.75C26.25 25.125 25.125 26.25 23.75 26.25H6.25C4.8625 26.25 3.75 25.125 3.75 23.75V18.75H6.25V23.75H23.75V6.25H6.25V11.25H3.75V6.25C3.75 4.875 4.8625 3.75 6.25 3.75ZM14.375 21.25L12.6125 19.4875L15.8375 16.25H3.75V13.75H15.8375L12.6125 10.5125L14.375 8.74999L20.625 15L14.375 21.25Z"
        fill={Colors.accent}
      />
    </Svg>
  );
};

const PlusSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 40}
      height={props.size || 40}
      viewBox="0 0 40 40"
      fill="none">
      <Line y1="19.5" x2="40" y2="19.5" stroke={Colors.accent} />
      <Line x1="19.5" y1="40" x2="19.5" stroke={Colors.accent} />
    </Svg>
  );
};

const WarningSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 25}
      height={props.size || 25}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.1666 17.9166L9.99998 2.08331L0.833313 17.9166H19.1666ZM10.8333 15.4166H9.16665V13.75H10.8333V15.4166ZM9.16665 12.0833H10.8333V8.74998H9.16665V12.0833Z"
        fill={Colors.yellow}
      />
    </Svg>
  );
};

const SendSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 30}
      height={props.size || 30}
      viewBox="0 0 30 30"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.875 12.5L1.8875 3.75L28.125 15L1.8875 26.25L1.875 17.5L20.625 15L1.875 12.5ZM4.3875 7.5375L13.775 11.5625L4.375 10.3125L4.3875 7.5375ZM13.7625 18.4375L4.375 22.4625V19.6875L13.7625 18.4375Z"
        fill={Colors.accent}
      />
    </Svg>
  );
};

const BackArrowSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.41424 12L16.7071 19.2929L15.2929 20.7071L6.58582 12L15.2929 3.29291L16.7071 4.70712L9.41424 12Z"
        fill={Colors.accent}
      />
    </Svg>
  );
};

const SettingsSvg = (props: SvgProps) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5758 9.90958L22.6559 18.9896C23.0559 19.3896 23.0559 20.0196 22.6559 20.3996L20.3558 22.6996C19.9658 23.0896 19.3358 23.0896 18.9458 22.6996L9.83582 13.5896C7.51587 14.4596 4.80591 13.9696 2.9458 12.1096C0.645874 9.81958 0.435913 6.22958 2.2959 3.68958L6.12585 7.51956L7.5459 6.10959L3.70581 2.25958C6.25586 0.399567 9.83582 0.609589 12.1359 2.90958C14.0259 4.80957 14.5059 7.56958 13.5758 9.90958ZM10.1959 11.1296L19.6559 20.5896L20.5359 19.6996L11.0859 10.2496C11.5459 9.65958 11.8459 8.99957 11.9659 8.28958C12.2159 6.89957 11.8059 5.40958 10.726 4.32956C9.77588 3.38956 8.52588 2.94955 7.28589 3.01956L10.3759 6.10956L6.13586 10.3496L3.0459 7.25958C2.97595 8.49957 3.41589 9.75958 4.36584 10.6996C5.40588 11.7396 6.83594 12.1496 8.19592 11.9496C8.90588 11.8496 9.58594 11.5796 10.1959 11.1296Z"
        fill={Colors.accent}
        fill-opacity="0.54"
      />
    </Svg>
  );
};

export {
  MoonSvg,
  ExitSvg,
  PlusSvg,
  WarningSvg,
  SendSvg,
  BackArrowSvg,
  SettingsSvg,
};
