import { AUTHENTICATE_FAIL, AUTHENTICATE, REGISTER, DEAUTHENTICATE } from '../types';

const initialState = {
  token: null
};

export default (state = initialState, action) => {

  switch(action.type) {

    case AUTHENTICATE_FAIL:
      return { error: action.payload }

    case AUTHENTICATE:
      return { token: action.payload };

    case REGISTER:
      return { success: action.payload };

    case DEAUTHENTICATE:
      return { token: null };

    default:
      return state;

  }

};