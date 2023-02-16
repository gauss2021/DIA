import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ResetSearchIcon from '../components/resetSeachIcon';
import SearchIcon from '../components/SearchIcon';
import {Dimensions, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Card from '../components/Card';
import Deal from '../components/Deal';
import PopularRestaurant from '../components/PopularRestaurant';
import {COLOR} from '../config';

function Home({
  navigation,
  modalVisible,
  setModalVisible,
}: {
  navigation: any;
  modalVisible: boolean;
  setModalVisible: Function;
}): JSX.Element {
  const [searchValue, changeSearchValue] = useState('');
  //const {modalVisible, setModalVisible} = route.params;
  if (modalVisible) {
    return (
      <ScrollView>
        <SafeAreaView>
          <View>
            <Image
              source={require('./../assets/images/banner.jpg')}
              style={{
                width: '100%',
                height: 200,
                resizeMode: 'cover',
              }}
            />
          </View>
        </SafeAreaView>
        <View style={{paddingHorizontal: 30, backgroundColor: COLOR.primary}}>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>
            Commander en ligne
          </Text>
        </View>
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text>Revenir en arriere</Text>
        </Pressable>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <View style={{paddingHorizontal: 20, marginTop: 15}}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              paddingHorizontal: 15,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 1,
            }}>
            <View
              style={{
                marginRight: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginEnd: 5,
                  display: searchValue.length > 0 ? 'none' : 'flex',
                }}>
                <SearchIcon />
              </View>
              <TextInput
                value={searchValue}
                placeholder="Rechercher un restaurant"
                onChangeText={text => {
                  changeSearchValue(text);
                }}
              />
            </View>
            <View
              style={{
                display: searchValue.length < 1 ? 'none' : 'flex',
                justifyContent: 'flex-end',
              }}>
              <Pressable
                onPress={() => {
                  changeSearchValue('');
                }}>
                <ResetSearchIcon />
              </Pressable>
            </View>
          </View>
          {/* ici carousel */}
          <View style={{flex: 1}}>
            {/* <Carousel
                loop
                width={100}
                height={50}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                //onSnapToItem={({index}: {index: number} => console.log('current index:', index)}
                renderItem={({index}: {index: number}) => (
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      justifyContent: 'center',
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
                  </View>
                )}
              /> */}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>
              Les plus populaires
            </Text>
            <Text style={{color: 'blue'}}>Tous voir</Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <Pressable
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Card />
              </Pressable>
              {/* <Card />
                <Card /> */}
            </View>
          </ScrollView>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 15,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>
              Meilleurs deals
            </Text>
            <Text style={{color: 'blue'}}>Tous voir</Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <Deal />
              <Deal />
              <Deal />
              <Deal />
            </View>
          </ScrollView>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 15,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>
              Restaurants populaires
            </Text>
            <Text style={{color: 'blue'}}>Tous voir</Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 10,
              }}>
              <PopularRestaurant />
              <PopularRestaurant />
              <PopularRestaurant />
              <PopularRestaurant />
              <PopularRestaurant />
              <PopularRestaurant />
              <PopularRestaurant />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default Home;
