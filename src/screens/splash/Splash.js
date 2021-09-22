/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

export class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.replace('Dashboard');
    }, 3000);
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
