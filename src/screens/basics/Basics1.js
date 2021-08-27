/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

export class Basics1 extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf',
          // height: '100%',
          // width: '100%',
          padding: 10,
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            // height: '100%',
            // width: '100%',
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

          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fa2',
                borderWidth: 1,
                borderRadius: 5,
                height: 50,
                width: '80%',
                color: '#fff',
                fontSize: 20,
              }}
              placeholder={'Name'}
              placeholderTextColor={'red'}
              autoCapitalize={'none'}
              // autoCapitalize={'characters'}
              // autoCapitalize={'sentences'}
              // autoCapitalize={'words'}
              value={'Test class'}
              editable={false}
            />

            <TextInput
              style={{
                backgroundColor: '#0001',
                borderWidth: 1,
                borderRadius: 5,
                // height: 50,
                width: '80%',
                fontSize: 20,
                marginTop: 10,
              }}
              placeholder={'Password'}
              maxLength={11}
              secureTextEntry={true}
            />

            <TextInput
              style={{
                backgroundColor: '#0001',
                borderWidth: 1,
                borderRadius: 5,
                // height: 50,
                width: '80%',
                fontSize: 20,
                marginTop: 10,
              }}
              placeholder={'Paragraph'}
              multiline={true}
              numberOfLines={6}
              // keyboardType={'numeric'}
              // keyboardType={'email-address'}
              keyboardType={'phone-pad'}
            />
          </View>
        </View>
      </View>
    );
  }
}
