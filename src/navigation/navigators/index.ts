import {connect, ConnectedProps} from 'react-redux';
import {ReduxStore} from '../../state';
import RootNavigator from './RootNavigator';

interface StateProps {
  splashShown: boolean;
}

const mapState = (state: ReduxStore): StateProps => ({
  splashShown: state.navigation.splashShown,
});

export type Props = ConnectedProps<typeof connector>;
export const connector = connect(mapState);
export default connector(RootNavigator);
