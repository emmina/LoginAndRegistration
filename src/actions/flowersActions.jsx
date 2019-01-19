import asyncActionCreator from '../helpers/asyncActionCreator';

export const fetchFlowers = asyncActionCreator(() => async dispatch => {
  let response;
  fetch('').then(function(data) {
      response = data;
  })
  return { flowers: response.data };
}, { name: 'FETCH_FLOWERS' });