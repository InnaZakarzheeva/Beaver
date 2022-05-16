import {createAction, PayloadActionCreator} from '@reduxjs/toolkit';
import {call, put} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import authSlice, {SLICE_NAME} from './slice';
import {AuthRepository} from '../../services/repository';
import {ApiRequestError} from '../../services/ApiManager';
import {RequestErrorView} from './types';

export const registrationAsyncAction = createAction(
  `${SLICE_NAME}/signInAsyncAction`,
);

export function* registrationSaga() {
  const {
    startRequestRegistration,
    successRequestRegistration,
    errorRequestRegistration,
  } = authSlice.actions;
  try {
    yield put(startRequestRegistration());

    const result: AxiosResponse = yield call(AuthRepository.registration);

    const {_id, token} = result.data;
    yield put(successRequestRegistration(_id));
    AuthRepository.saveTokenToLocalStorage(token);
  } catch (error) {
    yield handleApiError(error, errorRequestRegistration);
  }
}

function* handleApiError(
  error: ApiRequestError,
  actioCreator: PayloadActionCreator<RequestErrorView>,
) {
  if (error.statusCode >= 400 && error.statusCode <= 500) {
    console.log('[API ERROR]: ', JSON.stringify(error));
    yield put(
      actioCreator({
        code: error.statusCode,
        message: (error.data.messages as Array<string>).join(`\n`),
      }),
    );
  } else {
    console.log('[SERVER ERROR]: ', JSON.stringify(error));
    yield put(
      actioCreator({
        code: error.statusCode,
        message: 'Server error',
      }),
    );
  }
}
