/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Dashboard extends React.Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount = () => {
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
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Dashboard'}
          leftIc={'arrow-back'}
          leftPressed={() => {
            console.warn('Left');
            // this.props.navigation.goBack();
          }}
          rightPressed={() => {
            alert(
              'email = ' +
                this.state.email +
                '\n' +
                'password = ' +
                this.state.password,
            );
          }}
          rightIc={'chatbox-outline'}
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
      </View>
    );
  }
}
