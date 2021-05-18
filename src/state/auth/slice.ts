import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState, RequestErrorView} from './types';
export const SLICE_NAME = 'AUTH';

const initialState: AuthState = {
  requestRegistrationStatus: 'idle',
  requestRegistrationError: null,
  userID: '',
};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startRequestRegistration: state => {
      state.requestRegistrationStatus = 'pending';
    },
    successRequestRegistration: (state, action: PayloadAction<string>) => {
      state.requestRegistrationStatus = 'success';
      state.requestRegistrationError = null;
      state.userID = action.payload;
    },
    errorRequestRegistration: (
      state,
      action: PayloadAction<RequestErrorView>,
    ) => {
      state.requestRegistrationStatus = 'failure';
      state.requestRegistrationError = action.payload;
    },
    hideErrorRequestRegistration: state => {
      state.requestRegistrationStatus = 'idle';
      state.requestRegistrationError = null;
    },
  },
});

export default authSlice;
