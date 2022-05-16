import {connect} from 'react-redux';
import {ReduxStore, registrationAsyncAction} from '../../state';
import WelcomeScreen from './WelcomeScreen';
import {DispatchProps, StateProps} from './types';

const mapState = (state: ReduxStore): StateProps => ({
  requestStatus: state.auth.requestRegistrationStatus,
});

const mapDispatch: DispatchProps = {
  createProfile: () => registrationAsyncAction(),
};

export const connector = connect(mapState, mapDispatch);
export default connector(WelcomeScreen);
