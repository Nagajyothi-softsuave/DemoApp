import { Alert } from 'react-native';
import { USERS_URLS } from '../AxiosServices/ApiURL';
import {
  apiErrorAlert,
  AxiosServiceMethods,
} from '../AxiosServices/AxiosMethods';
import { REQUEST_TYPE } from '../AxiosServices/REQUEST_TYPES';

const CheckInAPI = {
  QuestionaryApi: (params = {}, successCallback = () => {}) => {
    AxiosServiceMethods(
      true,
      USERS_URLS?.QuestionaryApi,
      REQUEST_TYPE.GET,
      params,
      successCallback,
      err => {
        console.log('Error in Axios:', err);
        if (err.response) {
          Alert.alert(err.response.data?.message);
        } else {
          apiErrorAlert('QuestionaryApi', err);
        }
      },
    );
  },
};
export default CheckInAPI;
