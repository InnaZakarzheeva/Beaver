import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from './types';
export const SLICE_NAME = 'AUTH';

const initialState: AuthState = {};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
});

export default authSlice;
