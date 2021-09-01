/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.93)',
            // height: '100%',
            // width: '100%',
            padding: 40,
            flex: 1,
          }}>
          {/* top spacer */}
          <View
            style={{
              height: '15%',
              // backgroundColor: '#aaf',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </View>

          <Text
            style={{
              color: '#fff',
              fontSize: 30,
            }}>
            Welcome
          </Text>

          <Text
            style={{
              color: '#fff',
              fontSize: 18,
            }}>
            glad to see you!
          </Text>

          {/* center spacer */}
          <View
            style={{
              height: '10%',
              // backgroundColor: '#aaf',
            }}
          />

          <TextInput
            style={{
              height: 50,
              width: '100%',
              fontSize: 18,
              color: '#fff',
            }}
            underlineColorAndroid={'#fff'}
            placeholder={'Name'}
            placeholderTextColor={'#fff'}
          />

          <TextInput
            style={{
              height: 50,
              width: '100%',
              fontSize: 18,
              marginTop: 10,
              color: '#fff',
            }}
            underlineColorAndroid={'#fff'}
            placeholder={'Email'}
            placeholderTextColor={'#fff'}
          />

          <TextInput
            style={{
              height: 50,
              width: '100%',
              fontSize: 18,
              marginTop: 10,
              color: '#fff',
            }}
            underlineColorAndroid={'#fff'}
            placeholder={'Password'}
            placeholderTextColor={'#fff'}
          />

          <View
            style={{
              height: '7%',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              // console.warn('Pressed');
              this.props.navigation.navigate('Basics');
            }}
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
              Create Account
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Text
              style={{
                color: '#fff',
                marginTop: 3,
              }}>
              Already have an account? {'  '}
            </Text>

            <TouchableOpacity
              onPress={() => {
                // console.warn('Pressed');
                this.props.navigation.navigate('Basics1');
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  textDecorationLine: 'underline',
                }}>
                SignIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
