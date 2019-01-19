import {createAction} from 'redux-act';

import {fetchFlowers} from './flowersActions';

export { fetchFlowers };

export const setLocale = createAction('SET_LOCALE');