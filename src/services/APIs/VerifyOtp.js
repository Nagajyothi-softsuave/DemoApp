
import { Alert } from 'react-native';
import { DEFAULT_ENV } from '../AxiosServices/Environment';
import { getAsyncItem } from '../../utils';

const Verify = {
  verifyOtp: async (params = {}, successCallback = () => {}) => {
    try {
     
      const baseUrl = DEFAULT_ENV?.BASE_URL;
      const temp_jwt = await getAsyncItem('temp_jwt');
      const url = `${baseUrl}/verifyOtp`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${temp_jwt}`,
        },
        body: JSON.stringify(params),
      });
     
      const data = await response.json();
     

      if (response.ok) {
        successCallback(data);
      } else {
        console.log('Server error:', data);
        Alert.alert(data?.message || 'Something went wrong');
      }
    } catch (err) {
      
      console.log('Fetch error:', err);
      Alert.alert('Network error', 'Failed to verify OTP');
    }
  },
};

export default Verify;
