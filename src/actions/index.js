import {createAction} from 'redux-act';

import {fetchFlowers} from './flowersActions';
import { userActions } from './userActions';

export { 
    fetchFlowers,
    userActions
};

export const setLocale = createAction('SET_LOCALE');