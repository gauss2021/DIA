import React, {useState} from 'react';
import {Text, View, TextInput, Button, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLOR} from '../config';
import Visibility from '../components/visibility';
import ButtonComponent from '../components/ButtonComponent';

function Register({navigation}: {navigation: any}): JSX.Element {
  const [nom, changeNom] = React.useState('');
  const [mdp, changeMdp] = React.useState('');
  const [tel, changeTel] = React.useState('+242');
  const [visibility, changeVisibility] = useState(false);
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
        Bienvenue a DIA
      </Text>
      <Text
        style={{
          fontWeight: 'normal',
          fontSize: 16,
          textAlign: 'center',
          marginTop: 15,
        }}>
        Enregistrer vous afin de faire partir de la communaute
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
      <TextInput
        placeholder="Votre numero de telephone"
        style={{
          width: '100%',
          borderBottomWidth: 1,
          marginTop: 15,
          borderBottomColor: 'gray',
        }}
        value={tel}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'relative',
          marginTop: 15,
        }}>
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
      <Pressable onPress={() => navigation.navigate('login')}>
        <Text style={{marginVertical: 25, alignSelf: 'flex-end'}}>
          J'ai deja un compte
        </Text>
      </Pressable>
      <ButtonComponent
        color={COLOR.primary}
        onpress={() => {}}
        textButton="S'enregister"
        margintop={0}
        policeColor="#fff"
      />
    </View>
  );
}

export default Register;
