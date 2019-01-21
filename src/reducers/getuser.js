import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function getuser(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETUSER_REQUEST:
      return {
        loggingIn: true,
        profile: action.user
      };
    case userConstants.GETUSER_SUCCESS:
      return {
        loggedIn: true,
        profile: action.user
      };
    case userConstants.GETUSER_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}