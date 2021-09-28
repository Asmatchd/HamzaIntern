/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export class Splash extends React.Component {
  componentDidMount = () => {
    this.getUser();
  };

  getUser = () => {
    AsyncStorage.getItem('userData', (error, response) => {
      if (error || response === null) {
        setTimeout(() => {
          this.props.navigation.replace('SignIn');
        }, 3000);
      } else {
        setTimeout(() => {
          this.props.navigation.replace('HomeTabNavigator');
        }, 3000);
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: '20%',
            resizeMode: 'contain',
          }}
          source={require('../../assets/logo.png')}
        />
      </View>
    );
  }
}
