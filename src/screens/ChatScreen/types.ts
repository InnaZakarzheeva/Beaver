import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {RootStackParamList} from '../../navigation';
import {connector} from './index';

type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChatScreen'
>;

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'ChatScreen'>;

export interface StateProps {}

export interface DispatchProps {}

export type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  navigation: ChatScreenNavigationProp;
  route: ChatScreenRouteProp;
}
export default Props;
