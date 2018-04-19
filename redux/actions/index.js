import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE_FAIL, AUTHENTICATE, REGISTER, DEAUTHENTICATE } from '../types';
import { API } from '../../config';
import { setCookie, removeCookie } from '../../utils/cookie';

const authenticate = ({
  email,
  password
}, type) => {

  if (type !== 'premium/sign_in') {
    throw new Error('Wrong API call!');
  }

  return (dispatch) => {

    axios.post(`${API}/${type}`, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; version=1'
      }
    })
      .then((response) => {
        const token = response.headers['access-token'];

        setCookie('token', token);

        dispatch({
          type: AUTHENTICATE,
          payload: token
        });

        Router.push('/preferences');
      })
      .catch(() => {
        dispatch({
          type: AUTHENTICATE_FAIL,
          payload: 'Incorrect email or password.'
        });
      });

  };

};

const register = ({
  email,
  password,
  first_name,
  last_name
}, type) => {

  if (type !== 'premium/sign_up') {
    throw new Error('Wrong API call!');
  }

  return (dispatch) => {

    axios.post(`${API}/${type}`, {
      email,
      password,
      first_name,
      last_name
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; version=1'
      }
    })
      // .then(() => {
      //   dispatch(authenticate({ email, password }, 'sign_in'));
      // })
      .then((response) => {
        dispatch({
          type: REGISTER,
          payload: 'You have successfully registered.'
        });
      })
      .catch(() => {
        dispatch({
          type: AUTHENTICATE_FAIL,
          payload: 'This email is already used.'
        });
      });

  };

};

const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      payload: token
    });
  };
};

const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token');
    Router.push('/');
    dispatch({ type: DEAUTHENTICATE });
  };
};

export default {
  authenticate,
  register,
  reauthenticate,
  deauthenticate,
};
