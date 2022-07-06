import axios from 'axios';

export const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

api.interceptors.request.use(
  (res) => {
    const token = localStorage.getItem('token');
    if (!res.headers['Authorization']) {
      res.headers['Authorization'] = `Bearer ${token}`;
    }

    return res;
  },
  (error) => Promise.reject(error)
);
let refresh = false;

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { response, config } = error;

    if (response.status === 403 && !refresh) {
      refresh === true;
      const response = await api.get('auth/refresh', { withCredentials: true });

      if (response.status === 200) {
        config.headers['Authorization'] = `Bearer ${response?.data?.token}`;
        console.info('token', response?.data?.token);
        console.info('config', config);

        return config;
      }
    }

    refresh = false;
    return error;
  }
);
