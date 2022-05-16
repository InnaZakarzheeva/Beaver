import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import AuthSlice from './auth/slice';
import NavigationSlice from './navigation/slice';

import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
  navigation: NavigationSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: false,
});

sagaMiddleware.run(rootSaga);

export default store;
export type ReduxStore = ReturnType<typeof rootReducer>;
