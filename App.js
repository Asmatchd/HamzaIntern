/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        // backgroundColor: 'black',
        backgroundColor: '#faf',
        // backgroundColor: 'rgba(0,0,0,0.05)',
        height: 660,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: 400,
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
    </View>
  );
};

export default App;
