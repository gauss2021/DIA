import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import {COLOR} from '../config';
import StartIcon from './StartIcon';

const Favorite = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 100,
        width: '100%',
        elevation: 20,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        gap: 10,
      }}>
      <Image
        source={require('./../assets/images/banner.jpg')}
        style={{
          width: 80,
          height: 80,
          resizeMode: 'cover',
          borderRadius: 8,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '75%',
        }}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
            Pizza Box
          </Text>
          <Text style={{fontWeight: 'normal', fontSize: 16, color: 'gray'}}>
            Une petite description
          </Text>
          <Text style={{fontWeight: 'normal', fontSize: 16, color: 'gray'}}>
            Une adresse
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={{backgroundColor: COLOR.primary, padding: 5}}>4.2</Text>
          <StartIcon />
        </View>
      </View>
    </View>
  );
};

export default Favorite;
