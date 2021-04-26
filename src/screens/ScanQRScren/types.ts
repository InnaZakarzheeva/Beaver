import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {RootStackParamList} from '../../navigation';
import {connector} from './index';

type ScanQRScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ScanQRScreen'
>;

export interface StateProps {}

export interface DispatchProps {}

export type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  navigation: ScanQRScreenNavigationProp;
}
export default Props;
