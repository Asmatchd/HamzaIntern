/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export class NavHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '8%',
          // backgroundColor: '#aaf',
          flexDirection: 'row',
          borderBottomWidth: 0.3,
          borderBottomColor: '#0005',
        }}>
        <View
          style={{
            //   backgroundColor: '#afe',
            width: '15%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.leftIc} size={25} color={'red'} />
        </View>

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

        <View
          style={{
            //   backgroundColor: '#afe',
            width: '15%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.rightIc} size={25} color={'red'} />
        </View>
      </View>
    );
  }
}
