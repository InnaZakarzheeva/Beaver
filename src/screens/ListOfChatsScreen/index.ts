import {connect} from 'react-redux';
import {ReduxStore} from '../../state';
import ListOfChatsScreen from './ListOfChatsScreen';
import {DispatchProps, StateProps} from './types';

const mapState = (state: ReduxStore): StateProps => ({});

const mapDispatch: DispatchProps = {};

export const connector = connect(mapState, mapDispatch);
export default connector(ListOfChatsScreen);
