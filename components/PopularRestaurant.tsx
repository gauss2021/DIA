import React from 'react';
import {View, ImageBackground} from 'react-native';

const PopularRestaurant = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 130,
        width: 130,
        position: 'relative',
      }}>
      <ImageBackground
        source={require('./../assets/images/banner.jpg')}
        resizeMode="cover"
        imageStyle={{borderRadius: 10}}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default PopularRestaurant;
