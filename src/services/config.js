/* Vendor Libs Begin */
import axios from 'axios';
/* Vendor Libs End */

/* Custom Config Begin */
import Config from "../config/config";
/* Custom Config End */

import store from '@/store/store'

const AUTH_TOKEN = store.getters['authorization/getToken'];

export const NoAuthorization = axios.create({
    baseURL: Config.BaseUrl,
    headers: { 'Content-Type': 'application/json' }
});

export const Authorization = axios.create({
    baseURL: Config.BaseUrl,
    headers: { 'Content-Type': 'application/json' }
});

Authorization.defaults.headers.common['Authorization'] = AUTH_TOKEN ? ('Bearer ' + AUTH_TOKEN) : '';