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
    alignItems: 'center',
    position: 'absolute',
    top: 55,
    flexDirection: 'row',
    paddingHorizontal: Margins.marginsSmall,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.accent,
    width: width - Margins.marginsDefault - Margins.marginMiddle * 4,
  },
  qrWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    width: Margins.marginMiddle,
    height: Margins.marginMiddle,
    marginRight: Margins.marginMiddle,
  },
});
