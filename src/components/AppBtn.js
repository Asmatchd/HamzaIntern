/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export class AppBtn extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            width: '100%',
          },
          this.props.st,
        ]}>
        <TouchableOpacity
          {...this.props}
          style={{
            backgroundColor: '#fff',
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 18,
            }}>
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
