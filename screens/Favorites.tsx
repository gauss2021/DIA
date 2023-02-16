import React from 'react';

import {Text, View, TextInput, ScrollView} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Favorite from '../components/Favorite';
import {COLOR} from '../config';

function Favorites(): JSX.Element {
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginTop: 10,
        }}>
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
      </View>
    </ScrollView>
  );
}

export default Favorites;
