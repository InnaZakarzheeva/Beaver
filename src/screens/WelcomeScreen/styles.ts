import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Margins from '../../assets/margins';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  bubblesWrapper: {
    height: 120,
    marginHorizontal: Margins.marginsDefault,
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    backgroundColor: '#303135',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  leftBubble: {
    left: 0,
    top: 0,
  },
  rightBubble: {
    right: 0,
    bottom: 0,
  },
  text: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: '400',
  },
  buttonWrapper: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: Margins.buttonSize,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Margins.buttonSize,
  },
});
