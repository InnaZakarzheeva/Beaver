import {createSlice} from '@reduxjs/toolkit';
import {NavigationState} from './types';

export const SLICE_NAME = 'NAVIGATION';

const initialState: NavigationState = {
  splashShown: true,
};

const navigationSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    hideSplashAction: state => {
      state.splashShown = false;
    },
  },
});

export default navigationSlice;
