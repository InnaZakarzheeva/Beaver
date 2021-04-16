import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Margins from '../../assets/margins';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 55 + Margins.buttonSize + Margins.marginsDefault,
  },
  header: {
    position: 'absolute',
    top: 55,
    paddingHorizontal: Margins.marginsSmall,
    flexDirection: 'row',
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    width:
      width -
      Margins.buttonSize * 2 -
      Margins.marginsDefault -
      2 * Margins.marginsSmall,
    height: Margins.buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBtn: {
    width: Margins.buttonSize,
    height: Margins.buttonSize,
    marginLeft: Margins.marginMiddle,
  },
  iconWrapper: {
    width: Margins.buttonSize,
    height: Margins.buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.accent,
  },
  addBtnWrapper: {
    position: 'absolute',
    bottom: 55,
    right: 30,
  },
  addBtn: {
    width: Margins.containerSize,
    height: Margins.containerSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conversationsList: {
    alignSelf: 'center',
    paddingHorizontal: Margins.marginsSmall,
  },
});
