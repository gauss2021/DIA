import React from 'react';
import {View, Image, Text} from 'react-native';

const Card = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 180,
        width: 170,
        elevation: 10,
      }}>
      <Image
        source={require('./../assets/images/banner.jpg')}
        style={{
          width: '100%',
          height: 100,
          resizeMode: 'cover',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{paddingHorizontal: 10, elevation: 5}}>
        <Text style={{fontWeight: 'bold', marginVertical: 5, color: '#000'}}>
          Nom du restaurant
        </Text>
        <Text style={{fontWeight: 'normal', marginVertical: 1}}>
          adresse du restaurant
        </Text>
        <Text style={{fontWeight: 'normal', marginVertical: 1}}>
          ville du restaurant
        </Text>
      </View>
    </View>
  );
};

export default Card;
