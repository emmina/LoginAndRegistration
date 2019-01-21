import {createAction} from 'redux-act';

import { userActions } from './userActions';

export { 
    userActions
};

export const setLocale = createAction('SET_LOCALE');