import {connect} from 'react-redux';
import {ReduxStore, hideSplashAction, navigateToHome} from '../../state';
import SplashScreen from './SplashScreen';
import {DispatchProps, StateProps} from './types';

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {
  hideSplashScreen: () => hideSplashAction(),
  navigateToHome: () => navigateToHome(),
};

export const connector = connect(mapState, mapDispatch);
export default connector(SplashScreen);
