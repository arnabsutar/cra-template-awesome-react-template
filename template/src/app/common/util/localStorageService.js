const STORAGE_KEY = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  AUTHENTICATION_TOKEN: 'auth_token',
  USER_TYPE: 'user_type',
};
const setToken = (accessToken, refreshToken) => {
  localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, accessToken);
  localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refreshToken);
};
const getAccessToken = () => localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);

const getRefreshToken = () => localStorage.getItem(STORAGE_KEY.REFRESH_TOKEN);

const clearToken = () => {
  localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
};

const addToLocalStorage = (key, strValue) => {
  if (STORAGE_KEY[key] === undefined) {
    throw new Error(`${key} is not allowed to store`);
  }
  if (strValue === null || strValue === undefined) {
    throw new Error('Empty value is not allowed');
  }
  localStorage.setItem(key, strValue);
};

const getValueFromLocalStorage = (key) => localStorage.getItem(key);

export {
  setToken,
  getAccessToken,
  getRefreshToken,
  clearToken,
  addToLocalStorage,
  getValueFromLocalStorage,
  STORAGE_KEY,
};
