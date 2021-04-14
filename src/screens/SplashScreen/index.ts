import {connect} from 'react-redux';
import {ReduxStore, hideSplashAction} from '../../state';
import SplashScreen from './SplashScreen';
import {DispatchProps, StateProps} from './types';

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {
  hideSplashScreen: () => hideSplashAction(),
};

export const connector = connect(mapState, mapDispatch);
export default connector(SplashScreen);
