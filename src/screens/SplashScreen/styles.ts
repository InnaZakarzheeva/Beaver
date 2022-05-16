import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6,
  },
});
