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

export class SignIn extends React.Component {
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

          <AppInput ic={'ios-mail'} placeholder={'Email'} />

          <View
            style={{
              height: '2%',
            }}
          />

          <AppInput
            ic={'ios-lock-closed'}
            placeholder={'Password'}
            secureTextEntry={true}
          />

          <View
            style={{
              height: '7%',
            }}
          />

          <AppBtn
            txt={'Sign In'}
            onPress={() => {
              this.props.navigation.navigate('Basics');
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
