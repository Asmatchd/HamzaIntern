/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Settings extends React.Component {
  logOut = () => {
    AsyncStorage.removeItem('userData', () => {
      this.props.navigation.replace('SignIn');
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('List');
          }}
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.logOut();
          }}
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
