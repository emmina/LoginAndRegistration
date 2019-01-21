import { combineReducers } from 'redux';

import { registration } from './registration';
import { authentication } from './authentication';
import { getuser } from './getuser';

const rootReducer = combineReducers({
  registration,
  authentication,
  getuser
  });
  
  export default rootReducer;