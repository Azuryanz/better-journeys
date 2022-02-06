import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-d1-test.herokuapp.com/api',
})