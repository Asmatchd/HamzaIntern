/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavHeader} from '../../components';

export class Dashboard extends React.Component {
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
            console.warn('Right');
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
