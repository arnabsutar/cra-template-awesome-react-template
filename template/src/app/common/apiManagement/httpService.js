/* eslint-disable no-console */
import http from '../app/common/apiManagement/http';
import {
  authenticationInterceptor,
  authorizationInterceptor,
  baseResponseInterceptor,
  rejectRequest,
  errorInterceptor,
  baseRequestInterceptor,
} from './httpInterceptors';
import API, { REQUSET_HEADER } from '../app/common/apiManagement/apiConfig';

http.interceptors.request.use(authenticationInterceptor, rejectRequest);
http.interceptors.request.use(authorizationInterceptor, rejectRequest);
http.interceptors.request.use(baseRequestInterceptor, rejectRequest);
http.interceptors.request.use(baseResponseInterceptor, rejectRequest);
http.interceptors.response.use(errorInterceptor, rejectRequest);

// use interceptors
const invokeApi = async (apiKey, data = null, headers = null) => {
  const config = { headers: { ...headers } };
  config.headers[REQUSET_HEADER.API_KEY] = apiKey;
  const apiOption = API[apiKey];

  console.log('API options passed :', apiKey, data, headers);
  console.log(' Invoker instance used ;', http);
  switch (apiOption.requestType) {
    case 'GET':
      return http.get(apiOption.endpoint, config);
    case 'POST':
      return http.post(apiOption.endpoint, data, config);
    case 'PUT':
      return http.put(apiOption.endpoint, data, config);
    case 'DELETE':
      return http.delete(apiOption.endpoint, config);
    default:
      throw new Error(`Invalid request type : ${apiOption.requestType}`);
  }
};

export default invokeApi;
