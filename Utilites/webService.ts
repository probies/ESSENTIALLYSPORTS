import axios from 'axios';

axios.defaults.baseURL=process.env.NEXT_PUBLIC_BASE_URL

const createHeader = (_URL: string, options = {}) => {
  let header = {
    Accept: '/',
    Authorization: ''
  };
  options = { ...options, headers: header };
  return { URL: _URL, options: options };
};


const GET = (_URL: string, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.get(URL, options);
};


export { GET };
