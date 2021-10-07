/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  signUpUser = () => {
    let {name, email, password} = this.state;
    if (name === '' || email === '' || password === '') {
      alert('All fields are required ');
    } else {
      if (password.length < 8) {
        alert('Password must contain 8 characters');
      } else {
        console.warn('name = ' + name);
        console.warn('email = ' + email);
        console.warn('password = ' + password);
      }
    }
  };

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
            onChangeText={txt => {
              this.setState({name: txt});
            }}
            style={{
              height: 50,
              width: '100%',
              fontSize: 18,
              color: '#fff',
            }}
            underlineColorAndroid={'#fff'}
            placeholder={'Name'}
            placeholderTextColor={'#fff'}
            // value={this.state.name}
          />

          <TextInput
            onChangeText={txt => {
              this.setState({email: txt});
            }}
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
            onChangeText={txt => {
              this.setState({password: txt});
            }}
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
            secureTextEntry={true}
          />

          <View
            style={{
              height: '7%',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              this.signUpUser();
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
                this.props.navigation.navigate('SignIn');
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
