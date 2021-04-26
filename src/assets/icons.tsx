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

const QRSvg = (props: SvgProps) => {
  return (
    <Svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24">
      <Path
        d="M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm0-2h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8 8h-1v-2h1v1h2v1h-1v1h-1v-1zm2 12v-1h-1v1h1zm-1-15v-1h-2v1h1v1h1v-1zm8-1v6h-1v-1h-4v-5h5zm-1 4v-3h-3v3h3zm-14 2h-1v1h2v-1h-1zm0 3h1v1h1v-3h-1v1h-2v2h1v-1zm5 1v2h1v-2h-1zm4-10h-1v3h1v-3zm0 5v-1h-1v1h1zm3-2h1v-1h-1v1zm-10-1h-1v1h1v-1zm2-2v5h-5v-5h5zm-1 1h-3v3h3v-3zm9 5v1h-1v-1h-2v1h-1v-1h-3v-1h-1v1h-1v1h1v2h1v-1h1v2h1v-2h3v1h-2v1h2v1h1v-3h1v1h1v2h1v-1h1v-1h-1v-1h-1v-1h1v-1h-2zm-11 8h1v-1h-1v1zm-2-3h5v5h-5v-5zm1 4h3v-3h-3v3zm12-3v-1h-1v1h1zm0 1h-1v1h-1v-1h-1v-1h1v-1h-2v-1h-1v2h-1v1h-1v3h1v-1h1v-1h2v2h1v-1h1v1h2v-1h1v-1h-2v-1zm-9-3h1v-1h-1v1zm10 2v1h1v1h1v-3h-1v1h-1zm2 4v-1h-1v1h1zm0-8v-1h-1v1h1z"
        fill={Colors.accent}
      />
    </Svg>
  );
};

export {ExitSvg, PlusSvg, WarningSvg, SendSvg, BackArrowSvg, QRSvg};
