import {connect} from 'react-redux';
import {ReduxStore} from '../../state';
import SettingsScreen from './SettingsScreen';
import {DispatchProps, StateProps} from './types';

const mapState = (state: ReduxStore): StateProps => ({
  userID: state.auth.userID,
});

const mapDispatch: DispatchProps = {};

export const connector = connect(mapState, mapDispatch);
export default connector(SettingsScreen);
