import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import {COLOR} from '../config';

const Deal = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 200,
        width: 170,
        position: 'relative',
      }}>
      <ImageBackground
        source={require('./../assets/images/banner.jpg')}
        resizeMode="cover"
        imageStyle={{borderRadius: 10}}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          justifyContent: 'center',
        }}
      />
      <View style={{position: 'absolute', paddingHorizontal: 10, bottom: 10}}>
        <Text
          style={{
            width: 50,
            backgroundColor: COLOR.primary,
            paddingVertical: 1,
            height: 3,
          }}></Text>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Nom du truc</Text>
        <Text style={{color: '#fff', marginVertical: 5}}>Nombre de places</Text>
      </View>
    </View>
  );
};

export default Deal;
