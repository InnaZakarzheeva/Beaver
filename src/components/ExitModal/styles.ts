import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Margins from '../../assets/margins';

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 300,
    height: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  btnTitle: {
    fontSize: 16,
    color: Colors.white,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Margins.buttonSize,
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    width: 250,
    height: 55,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Margins.marginMiddle,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.yellow,
  },
  separator: {
    height: Margins.separator,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    paddingHorizontal: 25,
  },
});

export default styles;
