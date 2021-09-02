/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignIn extends React.Component {
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
              height: '8%',
              // backgroundColor: '#aaf',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Sign In
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
              }}
              source={require('../../assets/user.png')}
            />
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
              Sign In
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
              Don't have an account? {'  '}
            </Text>

            <TouchableOpacity
              onPress={() => {
                // console.warn('Pressed');
                this.props.navigation.navigate('SignUp');
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  textDecorationLine: 'underline',
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
