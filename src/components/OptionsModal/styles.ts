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
    height: 300,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.primary,
    paddingVertical: Margins.marginMiddle,
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    width: 250,
    height: 55,
    marginBottom: Margins.marginMiddle + Margins.marginsSmall,
  },
  innerBubble: {
    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    width: 250,
    height: 55,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    lineHeight: 55,
    marginBottom: Margins.marginMiddle,
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
  btnWrapper: {
    marginBottom: Margins.marginMiddle,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    right: Margins.marginMiddle,
    marginBottom: Margins.marginsSmall,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
});

export default styles;
