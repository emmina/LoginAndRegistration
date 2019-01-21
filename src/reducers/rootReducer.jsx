import { combineReducers } from 'redux';

import flowers from './flowers';
import { registration } from './registration';
import { authentication } from './authentication';
import { getuser } from './getuser';

const rootReducer = combineReducers({
  flowers,
  registration,
  authentication,
  getuser
  });
  
  export default rootReducer;