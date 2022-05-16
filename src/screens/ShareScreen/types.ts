import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {RootStackParamList} from '../../navigation';
import {connector} from './index';

type ShareScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ShareUserScreen'
>;

export interface StateProps {
  userID: string;
}

export interface DispatchProps {}

export type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  navigation: ShareScreenNavigationProp;
}
export default Props;
