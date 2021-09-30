/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {NavHeader, Loading} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Dashboard extends React.Component {
  state = {
    email: '',
    password: '',
    showLoading: false,
  };

  componentDidMount = () => {
    this.controlLoading(true);

    AsyncStorage.getItem('userData', (error, data) => {
      if (error || data === null) {
        alert('Something went wrong');
      } else {
        const user = JSON.parse(data);
        this.setState({
          email: user.email,
          password: user.password,
        });
      }
    });

    setTimeout(() => {
      this.controlLoading(false);
    }, 2000);
  };

  logOut = () => {
    AsyncStorage.removeItem('userData', () => {
      this.props.navigation.replace('SignIn');
    });
  };

  controlLoading = value => {
    this.setState({showLoading: value});
  };

  render() {
    return (
      <ImageBackground
        style={{
          height: '100%',
        }}
        source={require('../../assets/bg.jpg')}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#0006',
          }}>
          <Loading show={this.state.showLoading} />
          <NavHeader
            title={'Dashboard'}
            leftIc={'list'}
            leftPressed={() => {
              this.props.navigation.openDrawer();
            }}
          />

          <View
            style={{
              height: '18%',
              // backgroundColor: '#faf',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('TabNavigator');
              }}
              style={{
                height: '80%',
                backgroundColor: '#fff',
                width: '90%',
                borderColor: 'red',
                borderWidth: 0.5,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>FlatList</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '18%',
              // backgroundColor: '#faf',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}
              style={{
                height: '80%',
                backgroundColor: '#fff',
                width: '90%',
                borderColor: 'red',
                borderWidth: 0.5,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Image Picker</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '18%',
              // backgroundColor: '#faf',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Custom Alert...!', 'THis is custom alert', [
                  {
                    text: 'Remind later',
                    onPress: () => console.warn('remind Later'),
                  },
                  {
                    text: 'Cancel',
                    onPress: () => console.warn('Cancel'),
                  },
                  {
                    text: 'Ok',
                    onPress: () => console.warn('Ok'),
                  },
                ]);
              }}
              style={{
                height: '80%',
                backgroundColor: '#fff',
                width: '90%',
                borderColor: 'red',
                borderWidth: 0.5,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Alert</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
