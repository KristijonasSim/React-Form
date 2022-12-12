import axios from 'axios';
import { dummyURL } from './axiosConfig';


const USER_API_URL = {
  LOGIN: '/auth/login',
  REGISTRATION: '/auth/registration'
}

export const userApi = {
  userLogin: (values) => dummyURL.post(USER_API_URL.LOGIN, values).then(data => data),
  userRegistration: (values) => dummyURL.post(USER_API_URL.REGISTRATION, values).then(({ data }) => data)
}