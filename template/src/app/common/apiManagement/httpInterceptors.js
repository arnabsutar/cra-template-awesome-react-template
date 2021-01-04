/* eslint-disable no-underscore-dangle */
import _ from 'lodash-es';
import {
  getValueFromLocalStorage,
  STORAGE_KEY,
  getAccessToken,
  getRefreshToken,
  setToken,
} from '../util/localStorageService';

import history from '../util/history';
import http from './http';
import { dispatch } from '../../../stateManagement/appStore';
import {
  processingStarted,
  processingCompleted,
} from '../redux/actions/commonActions';
import API, { REQUSET_HEADER } from './basicApi';

const USER_NOT_AUTHENTICATED = 'UserNotAuthenticated';

const getApiDetail = (apiKey) => API[apiKey];

const authenticationInterceptor = (req) => {
  if (_.isEmpty(req.headers[REQUSET_HEADER.API_KEY])) {
    throw new Error(`Invalid API Key : ${req.headers[REQUSET_HEADER.API_KEY]}`);
  }
  const apiOption = getApiDetail(REQUSET_HEADER.API_KEY);
  if (
    apiOption.authenticated
    && _.isEmpty(req.headers[STORAGE_KEY.AUTHENTICATION_TOKEN])
  ) {
    // user is not authenticated; re-authenticate user
    throw new Error(USER_NOT_AUTHENTICATED);
  }
  return req;
};

const authorizationInterceptor = (req) => {
  // 1. Get the API KEY
  // 2. ADD Header in case of
  if (_.isEmpty(getAccessToken())) {
    // user is not authenticated; re-authenticate user
    throw new Error(USER_NOT_AUTHENTICATED);
  }
  return req;
};
const baseRequestInterceptor = (req) => {
  // get the api key from resp.config
  // get the API KEY
  // If wait cursor is required dispatch action
  if (_.isEmpty(req.headers[REQUSET_HEADER.API_KEY])) {
    throw new Error(`Invalid API Key : ${req.headers[REQUSET_HEADER.API_KEY]}`);
  }
  const apiOption = getApiDetail(req.headers[REQUSET_HEADER.API_KEY]);
  if (apiOption.authenticated) {
    req.headers[REQUSET_HEADER.AUTHORIZATION] = `Bearer ${getAccessToken()}`;
  }
  if (apiOption.showLoading) {
    dispatch(processingStarted());
  }

  return req;
};
const baseResponseInterceptor = (resp) => {
  // get the api key from resp.config
  // get the API KEY
  // If wait cursor is required dispatch action
  // need to check how we can get the request headers
  const apiOption = getApiDetail(resp.config.headers[REQUSET_HEADER.API_KEY]);
  if (apiOption.showLoading) {
    dispatch(processingCompleted());
  }
  return resp;
};

const rejectRequest = (error) => {
  Promise.reject(error);
};

const errorInterceptor = (error) => {
  const originalRequest = error.config;
  const apiOption = getApiDetail(originalRequest.headers[REQUSET_HEADER.API_KEY]);
  if (apiOption.showLoading) {
    dispatch(processingStarted());
  }
  // log error
  // handle error
  if (error.message === USER_NOT_AUTHENTICATED) {
    history.push('/login');
    return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    return http
      .post(
        getValueFromLocalStorage[STORAGE_KEY.USER_TYPE] === 'Internal'
          ? '/AAD/auth/token'
          : 'CIAM/authToken',
        {
          refresh_token: getRefreshToken(),
        },
      )
      .then((res) => {
        if (res.status === 201) {
          // 1) put token to LocalStorage
          setToken(res.data);

          // 2) Change Authorization header
          originalRequest.headers[REQUSET_HEADER.AUTHORIZATION] = `Bearer ${getAccessToken()}`;

          // 3) return originalRequest object with Axios.
          return http.request(originalRequest);
        }
        throw new Error(
          `Please check this error : ${res.status} >>> ${res.data}`,
        );
      });
  }

  // return Error object with Promise
  return Promise.reject(error);
};

export {
  authenticationInterceptor,
  authorizationInterceptor,
  baseRequestInterceptor,
  baseResponseInterceptor,
  errorInterceptor,
  rejectRequest,
};
