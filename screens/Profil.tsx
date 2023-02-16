import React, {useState} from 'react';
import {Text, View, TextInput, Button, Pressable} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Visibility from '../components/visibility';
import {COLOR} from '../config';

function Profil({navigation}: {navigation: any}): JSX.Element {
  const [nom, changeNom] = useState('');
  const [mdp, changeMdp] = useState('');
  const [visibility, changeVisibility] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          textAlign: 'center',
          marginTop: 25,
        }}>
        Se connecter
      </Text>
      <TextInput
        placeholder="Votre nom"
        style={{
          width: '100%',
          borderBottomWidth: 1,
          marginTop: 45,
          borderBottomColor: 'gray',
        }}
      />
      <View
        style={{display: 'flex', flexDirection: 'row', position: 'relative'}}>
        <TextInput
          placeholder="Votre mot de passe"
          secureTextEntry={visibility === true ? false : true}
          style={{
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}
        />
        <Pressable
          onPress={() => {
            changeVisibility(!visibility);
          }}
          style={{position: 'absolute', top: 10, right: 30}}>
          <Visibility visible={visibility} />
        </Pressable>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 25,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('forgetmdp');
          }}>
          <Text>Mot de passe Oublie?</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('register');
          }}>
          <Text>Vous n'avez pas de compte?</Text>
        </Pressable>
      </View>

      <ButtonComponent
        margintop={0}
        onpress={() => {}}
        color={COLOR.primary}
        textButton="Se connecter"
        policeColor="#fff"
      />
    </View>
  );
}

export default Profil;
