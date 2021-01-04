import axios from 'axios';
import { REQUSET_HEADER } from '../../../apiConfig';

const apiHeaders = {};
apiHeaders[REQUSET_HEADER.APP_NAME] = 'MY-ONLINE';

export default axios.create({
  timeout: 1000,
  headers: apiHeaders,
});
