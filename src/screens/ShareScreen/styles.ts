import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Margins from '../../assets/margins';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    backgroundColor: '#303135',
    width: width - Margins.marginsDefault,
    height: Margins.containerSize,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 55,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.accent,
  },
  btnContainer: {
    position: 'absolute',
    bottom: Margins.buttonSize,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Margins.buttonSize,
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.accent,
  },
  separator: {
    height: Margins.separator,
  },
  qrWrapper: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
