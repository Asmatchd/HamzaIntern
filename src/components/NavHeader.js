/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export class NavHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#fff9',
          flexDirection: 'row',
          borderBottomWidth: 0.3,
          borderBottomColor: '#0005',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPressed}
          style={{
            //   backgroundColor: '#afe',
            width: '15%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.leftIc} size={25} color={'red'} />
        </TouchableOpacity>

        <View
          style={{
            //   backgroundColor: '#faa',
            width: '70%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{this.props.title}</Text>
        </View>

        <TouchableOpacity
          onPress={this.props.rightPressed}
          style={{
            //   backgroundColor: '#afe',
            width: '15%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.rightIc} size={25} color={'red'} />
        </TouchableOpacity>
      </View>
    );
  }
}
