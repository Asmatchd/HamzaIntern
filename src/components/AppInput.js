/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class AppInput extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            width: '100%',
            alignItems: 'center',
          },
          this.props.st,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 8,
          }}>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={this.props.ic} color={'#fff'} size={18} />
          </View>
          <TextInput
            style={{
              height: 50,
              width: '85%',
              fontSize: 18,
              color: '#fff',
            }}
            placeholderTextColor={'#fff'}
            {...this.props}
          />
        </View>
      </View>
    );
  }
}
