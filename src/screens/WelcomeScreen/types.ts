import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {RootStackParamList} from '../../navigation';
import {RequestStatus} from '../../state';
import {connector} from './index';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeScreen'
>;

export interface StateProps {
  requestStatus: RequestStatus;
}

export interface DispatchProps {
  createProfile: () => void;
}

export type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  navigation: WelcomeScreenNavigationProp;
}
export default Props;
