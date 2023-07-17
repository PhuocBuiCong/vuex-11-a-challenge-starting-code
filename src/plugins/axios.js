import axios from 'axios';

const http = axios.create({
  baseURL: 'http://10.0.7.191:8000/api',
});

export default http;
