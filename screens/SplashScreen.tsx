import React from 'react';

import {Pressable, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';
import ButtonComponent from '../components/ButtonComponent';
import {COLOR} from '../config';

function SplashScreen({navigation}: {navigation: any}): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: COLOR.primary,
        height: '100%',
        paddingVertical: 25,
        paddingHorizontal: 25,
      }}>
      <View>
        <Image
          style={{width: 80, height: 80}}
          source={require('./../assets/images/banner.jpg')}
        />
        <Text style={{marginTop: 25, fontSize: 22}}>DIA</Text>
        <Text style={{marginTop: 10, fontSize: 16}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
          tempora! Odit, expedita corporis! Sit, architecto in eos aliquam
          reiciendis vitae, non tempora quos consequuntur cumque nesciunt, error
          commodi ipsum nulla.
        </Text>
      </View>
      <ButtonComponent
        color="#fff"
        onpress={() => {
          navigation.navigate('login');
        }}
        margintop={45}
        textButton="Se connecter"
        policeColor="gray"
      />
      <ButtonComponent
        color="#fff"
        onpress={() => {
          navigation.navigate('register');
        }}
        margintop={15}
        textButton="S'enregistrer"
        policeColor="gray"
      />
    </View>
  );
}

export default SplashScreen;
