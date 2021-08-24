/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export class Basics1 extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf',
          height: '100%',
          width: '100%',
          padding: 10,
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#fff',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'blue',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              textAlign: 'center',
            }}>
            Study Day
          </Text>

          <View
            style={{
              height: '10%',
              width: '100%',
              backgroundColor: '#aaf',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                marginTop: 4,
              }}>
              Don't have an account ?{'  '}
            </Text>

            <Text
              style={{
                color: 'red',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
