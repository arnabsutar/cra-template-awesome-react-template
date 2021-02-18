/**
 * @Description API configuartion for module home
 * @FileName apiConfig.js
 * @Author awesome-react-cli
 * @CreatedOn 08 February, 2021 16:39:31
 * @IssueID NA
 */
const apiConfig = {
  homeAPI: {
    apiKey: 'homeAPI',
    endpoint: `${window.SERVER_DATA.apiHost}/homeAPI`,
    type: 'GET',
    authenticated: true,
    showLoading: true,
  },
};

export default apiConfig;
