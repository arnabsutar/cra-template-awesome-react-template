/**
 * This is an automated file.
 * Please do not update manually.
 */

import baseAPI from './app/common/apiManagement/basicApi';
import { defaultAPI } from './app/modules/default';

const API = {
  ...baseAPI,
  ...defaultAPI,
};

const REQUSET_HEADER = {
  APP_NAME: 'app-name',
  AUTHENTICATION: 'Authentication',
  AUTHORIZATION: 'Authorization',
  API_KEY: 'app-api-key',
};

export default API;
export { REQUSET_HEADER };
