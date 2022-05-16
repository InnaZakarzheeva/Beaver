export * from './types';
import {registrationAsyncAction} from './sagas';
import Slice from './slice';

export const {hideErrorRequestRegistration} = Slice.actions;
export {registrationAsyncAction};
