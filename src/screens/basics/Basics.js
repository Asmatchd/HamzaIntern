/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {NavHeader} from '../../components';

export class Basics extends React.Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: 'black',
          backgroundColor: '#faf',
          // backgroundColor: 'rgba(0,0,0,0.05)',
          height: 660,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <NavHeader
          title={'Basics'}
          leftIc={'information'}
          rightIc={'ios-add-outline'}
        />
        <View
          style={{
            height: 200,
            width: 410,
            backgroundColor: 'blue',
            alignItems: 'center',
            // alignItems: 'flex-end',
            justifyContent: 'center',
            // justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#000',
            }}></View>
        </View>

        <View
          style={{
            height: 200,
            backgroundColor: '#aaf',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#a4a',
            }}></View>

          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#fa2',
            }}></View>
        </View>

        <View
          style={{
            height: 200,
            backgroundColor: '#f2a4',
          }}>
          <View
            style={{
              height: 150,
              width: 150,
              backgroundColor: '#fff',

              // margin: 20,
              marginLeft: 100,
              // marginRight: 100,
              marginTop: 30,
              // marginBottom: 30,
              // marginTop: -30,

              borderColor: '#0ad',

              borderWidth: 4,
              // borderLeftWidth: 4,
              // borderRightWidth: 4,
              // borderTopWidth: 4,
              // borderBottomWidth: 4,

              // borderRadius: 15,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 15,
            }}></View>
        </View>
      </View>
    );
  }
}
