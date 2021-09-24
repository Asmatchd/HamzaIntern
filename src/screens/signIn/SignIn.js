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

export class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  signIn = () => {
    if (this.state.email === '' || this.state.password === '') {
      alert('All fields are required');
    } else {
      if (this.state.password.length < 8) {
        alert('Password must contain 8 characters');
      } else {
        const data = {
          email: this.state.email,
          password: this.state.password,
        };

        AsyncStorage.setItem('userData', JSON.stringify(data), (error, res) => {
          error
            ? alert(error)
            : this.props.navigation.replace('DrawerNavigator');
        });
      }
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
