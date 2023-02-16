import React from 'react';

import {Text, View, TextInput} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import {COLOR} from '../config';

function ForgetMdp({navigation}: {navigation: any}): JSX.Element {
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
        Mot de passe oublier?
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          textAlign: 'center',
          marginTop: 15,
        }}>
        Entrer votre numero de telephone s'il vous plait
      </Text>
      <TextInput
        placeholder="Votre numero de telephone"
        style={{
          width: '100%',
          borderBottomWidth: 1,
          marginTop: 45,
          borderBottomColor: 'gray',
        }}
      />
      <ButtonComponent
        color={COLOR.primary}
        textButton="Envoyer"
        margintop={25}
        onpress={() => {
          navigation.navigate('checkyourphone');
        }}
        policeColor="#fff"
      />
    </View>
  );
}

export default ForgetMdp;
