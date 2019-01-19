import { createReducer } from 'redux-act';

import { fetchFlowers } from '../actions';

const initialState = {};

export default createReducer({
  [fetchFlowers.START]: state => ({
    ...state,
    isLoading: true,
    shouldLoad: false,
    isError: false
  }),
  [fetchFlowers.ERROR]: (state, { error }) => ({
    isLoading: false,
    shouldLoad: false,
    isError: true,
    error 
  }),
  [fetchFlowers.COMPLETE]: (state, { alerts }) => ({
    ...alerts
  }),
}, initialState);