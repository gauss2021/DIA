import React, {useRef} from 'react';

import {Text, View, TextInput} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {COLOR} from '../config';

import OTP from 'react-native-otp-form';
function CheckYourPhone(): JSX.Element {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%',
        paddingHorizontal: 25,
        paddingVertical: 25,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          textAlign: 'center',
          marginTop: 25,
        }}>
        Verification du code
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          textAlign: 'center',
          marginTop: 15,
        }}>
        Enter le code ici
      </Text>
      {/* <OTP
        codeCount={6}
        containerStyle={{marginTop: 50}}
        otpStyles={{backgroundColor: '#eee'}}
      /> */}
    </View>
  );
}

export default CheckYourPhone;
