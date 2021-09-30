/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export class Loading extends React.Component {
  render() {
    return this.props.show ? (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#0005',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          position: 'absolute',
        }}>
        <ActivityIndicator size="large" color="red" />
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
          }}>
          Please wait..
        </Text>
      </View>
    ) : null;
  }
}
