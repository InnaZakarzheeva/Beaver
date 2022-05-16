import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/colors';

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 120,
    height: 120,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  bubble: {
    shadowRadius: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
