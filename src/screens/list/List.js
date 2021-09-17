/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

export class List extends React.Component {
  state = {
    data: [
      {
        name: 'Khawer',
        phone: '123456789',
        img: require('../../assets/1.jpg'),
        age: '20',
        dob: '10-sep-2001',
      },
      {
        name: 'Ali',
        phone: '8765432',
        img: require('../../assets/2.jpg'),
        age: '22',
        dob: '22-oct-2001',
      },
      {
        name: 'Umer',
        phone: '32545726',
        img: require('../../assets/3.jpg'),
        age: '18',
        dob: '19-n0v-2001',
      },
      {
        name: 'Kamran',
        phone: '12348765',
        img: require('../../assets/4.jpg'),
        age: '40',
        dob: '10-apr-2001',
      },
      {
        name: 'Waseem',
        phone: '35434626',
        img: require('../../assets/1.jpg'),
        age: '25',
        dob: '10-sep-2005',
      },
    ],
    showRefreshing: false,
  };

  renderDesign = item => (
    <View
      style={{
        height: 70,
        width: '100%',
        // backgroundColor: '#faf',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          width: '90%',
          // backgroundColor: '#aaf',
          borderWidth: 0.5,
          borderRadius: 5,
          borderColor: 'red',
          padding: 5,
        }}>
        <View
          style={{
            // backgroundColor: '#aAF',
            height: '100%',
            width: '20%',
          }}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              // resizeMode: 'contain',
            }}
            source={item.img}
          />
        </View>

        <View
          style={{
            // backgroundColor: '#a3a',
            height: '100%',
            width: '65%',
            paddingLeft: 15,
            justifyContent: 'center',
          }}>
          <Text>Name: {item.name}</Text>
          <Text>Phone: {item.phone}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', {
              hamza: item,
              study: 'ok',
            });
          }}
          style={{
            // backgroundColor: '#aAF',
            height: '100%',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name={'chevron-forward'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );

  controlRefreshing = () => {
    this.setState({showRefreshing: true}, () => {
      setTimeout(() => {
        this.setState({showRefreshing: false});
      }, 3000);
    });
  };

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
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
              }}
            />
          )}
          ListHeaderComponent={() => (
            <View>
              <Text>This is header</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View>
              <Text>This is footer</Text>
            </View>
          )}
          refreshing={this.state.showRefreshing}
          onRefresh={() => this.controlRefreshing()}
        />
      </View>
    );
  }
}
