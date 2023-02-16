import React from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';

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

const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
  },
  modalView: {
    height: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Card;
