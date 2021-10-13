/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppBtn, AppInput} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmailValidator from 'email-validator';
import {axiosInstance, baseUrl} from '../../services/API';

export class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  signIn = () => {
    let value = EmailValidator.validate(this.state.email);
    if (value) {
      if (this.state.password === '') {
        alert('Password is required');
      } else {
        if (this.state.password.length < 8) {
          alert('Password must contain 8 characters');
        } else {
          const params = {
            email: this.state.email,
            password: this.state.password,
          };

          axiosInstance
            .post(baseUrl + 'users/signIn', params)
            .then(res => {
              const data = res.data;
              if (data.status === '200') {
                alert(data.msg);
                AsyncStorage.setItem(
                  'userData',
                  JSON.stringify(data.data),
                  () => {
                    this.props.navigation.navigate('HomeTabNavigator');
                  },
                );
              } else {
                alert(data.msg);
              }
            })
            .catch(err => {
              console.warn(err.message);
            });
        }
      }
    } else {
      alert('Invalid email');
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <StatusBar backgroundColor={'red'} />
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

          <AppInput
            ic={'ios-mail'}
            placeholder={'Email'}
            onChangeText={txt => this.setState({email: txt})}
          />

          <View
            style={{
              height: '2%',
            }}
          />

          <AppInput
            ic={'ios-lock-closed'}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={txt => this.setState({password: txt})}
          />

          <View
            style={{
              height: '7%',
            }}
          />

          <AppBtn
            txt={'Sign In'}
            onPress={() => {
              this.signIn();
            }}
          />

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
