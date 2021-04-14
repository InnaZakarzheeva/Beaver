import {connect} from 'react-redux';
import {ReduxStore} from '../../state';
import WelcomeScreen from './WelcomeScreen';
import {DispatchProps, StateProps} from './types';

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {};

export const connector = connect(mapState, mapDispatch);
export default connector(WelcomeScreen);
