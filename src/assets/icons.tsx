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

export {MoonSvg, ExitSvg, PlusSvg, WarningSvg};
