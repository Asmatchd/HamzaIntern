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
          }}
          rightPressed={() => {
            console.warn('Right');
          }}
          rightIc={'chatbox-outline'}
        />
      </View>
    );
  }
}
