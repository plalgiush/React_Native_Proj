import Axios from 'axios';
import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export const axios = Axios.create({
  baseURL: { apiUrl },
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
  withCredentials: true,
});

export const baseURL = axios.defaults.baseURL.apiUrl;
