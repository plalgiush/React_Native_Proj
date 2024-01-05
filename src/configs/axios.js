import Axios from 'axios';
// import getEnvVars from '../../environment';

// const { apiUrl } = getEnvVars();
const apiUrl = 'http://localhost:8000/api/v1/';

export const axios = Axios.create({
  baseURL: { apiUrl },
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
  withCredentials: true,
});

export const baseURL = axios.defaults.baseURL.apiUrl;
