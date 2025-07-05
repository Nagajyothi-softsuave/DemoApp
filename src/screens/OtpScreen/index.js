import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import styles from './style';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Verify from '../../services/APIs/VerifyOtp';
import Resend from '../../services/APIs/resend';

const OtpScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const handleOtpChange = text => {
    setOtp(text);
  };

  const handleSubmit = () => {
    if (otp.length === 4) {
      // Alert.alert('OTP Submitted', `Entered OTP: ${otp}`);
      const otpString = String(otp);
      console.log('[[[[[[[[[[[[[[[[[[[[[[[[',otp);
      Verify.verifyOtp({pincode:otp }, res => {
        console.log(res, '-----------');
        navigation.navigate('Home');
      });
       
    } else {
      
      Alert.alert('Invalid OTP', 'Please enter a 4-digit OTP');
    }
  };
  const handleResend=()=>{
     Resend.sendMail({},res=>{console.log(res)})

  }

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.title}>Enter OTP</Text>
      </View>
      <Text style={{ top: '5%' }}>
        Please enter the OTP sent to your email for two-step authentication.
      </Text>
      <View style={styles.Body}>
        <OtpInput
          numberOfDigits={4}
          focusColor="#3498db"
          onTextChange={handleOtpChange}
          onFilled={handleOtpChange}
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.otpBox,
            pinCodeTextStyle: styles.otpText,
          }}
        />
        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onpress={handleResend}>
          <Text style={styles.resendText}>Resend Otp</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <CustomButton label="Verify Otp" onPress={handleSubmit}></CustomButton>
      </View>
    </View>
  );
};

export default OtpScreen;
