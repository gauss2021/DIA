import React, {useRef} from 'react';

import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import User from '../components/User';
import LocationIcon from '../components/LocationIcon';
import Location from './Location';
import Favorites from './Favorites';
import FavoritesIcon from '../components/Favoritesicon';
import Profil from './Profil';
import HomeIcon from '../components/HomeIcon';
import {COLOR} from '../config';

const Tab = createBottomTabNavigator();

function BottomTabs(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: COLOR.primary,
        tabBarActiveBackgroundColor: COLOR.primary,
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: COLOR.primary,
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarActiveTintColor: COLOR.primary,
          tabBarActiveBackgroundColor: COLOR.primary,
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <HomeIcon />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="location"
        component={Location}
        options={{
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <LocationIcon />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Mes favories"
        component={Favorites}
        options={{
          tabBarActiveTintColor: COLOR.primary,
          tabBarActiveBackgroundColor: COLOR.primary,
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <FavoritesIcon />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="profil"
        component={Profil}
        options={{
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <User />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
