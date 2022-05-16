import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {RootStackParamList} from '../../navigation';
import {connector} from './index';

type ListOfChatsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListOfChats'
>;

export interface StateProps {}

export interface DispatchProps {}

export type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  navigation: ListOfChatsScreenNavigationProp;
}
export default Props;
