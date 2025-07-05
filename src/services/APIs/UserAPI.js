/* eslint-disable no-console */
import {USERS_URLS} from '../../AxiosServices/ApiURL.js';
import {REQUEST_TYPE} from '../../AxiosServices/REQUEST_TYPES.js';
import { AxiosServiceMethods } from '../AxiosServices/AxiosMethods.js';

const UserAPI = {
  signUp: (params = {}, successCallback = () => {}) => {
    AxiosServiceMethods(
      false,
      USERS_URLS?.signup,
      REQUEST_TYPE.POST,
      params,
      successCallback,
      err => {
        store.dispatch(setShowAppLoader(false));
        if (err.response) {
          console.log(err.response.data);
          Alert.alert(err.response.data?.message);
        } else {
          apiErrorAlert('signUp', err);
        }
      },
    );
  },
  signIn: (params = {}, successCallback = () => {}) => {
    AxiosServiceMethods(
      false,
      USERS_URLS?.signIn,
      REQUEST_TYPE.POST,
      params,
      successCallback,
      err => {
        console.log(JSON.stringify(err))
        store.dispatch(setShowAppLoader(false));
        if (err.response.data?.message) {
          console.log(err.response.data);
          Alert.alert(err.response.data?.message);
        } else {
          apiErrorAlert('signIn', err);
        }
      },
    );
  },
   login: (params = {}, successCallback = () => {}) => {
    AxiosServiceMethods(
      false,
      USERS_URLS?.signIn,
      REQUEST_TYPE.POST,
      params,
      successCallback,
      err => {
        console.log(JSON.stringify(err))
        store.dispatch(setShowAppLoader(false));
        if (err.response.data?.message) {
          console.log(err.response.data);
          Alert.alert(err.response.data?.message);
        } else {
          apiErrorAlert('signIn', err);
        }
      },
    );
  },
};
export default UserAPI;
