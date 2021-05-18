import {takeLatest} from 'redux-saga/effects';
import {registrationAsyncAction, registrationSaga} from './auth/sagas';

function* rootSaga() {
  yield takeLatest(registrationAsyncAction, registrationSaga);
}

export default rootSaga;
