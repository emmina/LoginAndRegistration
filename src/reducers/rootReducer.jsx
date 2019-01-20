import { combineReducers } from 'redux';

import flowers from './flowers';
import { registration } from './registration';
import { authentication } from './authentication';

const rootReducer = combineReducers({
  flowers,
  registration,
  authentication
  });
  
  export default rootReducer;