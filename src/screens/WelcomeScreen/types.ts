import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {RootStackParamList} from '../../navigation';
import {connector} from './index';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

export interface StateProps {}

export interface DispatchProps {}

export type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  navigation: WelcomeScreenNavigationProp;
}
export default Props;
