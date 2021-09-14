/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {NavHeader} from '../../components';

export class List extends React.Component {
  state = {
    data: [
      {name: 'Khawer'},
      {name: 'Ali'},
      {name: 'Umer'},
      {name: 'Kamran'},
      {name: 'Waseem'},
    ],
  };

  renderDesign = item => (
    <View
      style={{
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faf',
      }}>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'FlatList'}
          leftIc={'arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.renderDesign(item)}
          keyExtractor={(index, item) => item}
        />
      </View>
    );
  }
}
