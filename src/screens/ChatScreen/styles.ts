import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';
import Margins from '../../assets/margins';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: Margins.buttonSize,
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    minWidth: 50,
    minHeight: Margins.marginsDefault,
    justifyContent: 'center',
    paddingHorizontal: Margins.marginsSmall,
  },
  header: {
    width: width - Margins.marginsSmall * 2,
    height: Margins.buttonSize,
    shadowRadius: 5,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerHeader: {
    paddingHorizontal: Margins.marginMicro,
  },
  outterHeader: {
    marginHorizontal: Margins.marginsSmall,
  },
  title: {
    fontSize: 16,
    color: Colors.accent,
    width: width - Margins.marginsDefault * 2 - Margins.buttonSize,
    textAlign: 'center',
  },
  backBtn: {
    width: Margins.marginsDefault,
    height: Margins.marginsDefault,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
