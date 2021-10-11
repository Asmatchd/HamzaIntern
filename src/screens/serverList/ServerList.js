/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {axiosInstance, baseUrl} from '../../services/API';

export class ServerList extends React.Component {
  state = {
    data: [],
    showRefreshing: false,
  };

  componentDidMount = () => {
    this.allUsers();
  };

  allUsers = () => {
    axiosInstance
      .get(baseUrl + 'users')
      .then(res => {
        if (res.status === 200) {
          this.setState({data: res.data});
        } else {
          console.warn('Something went wrong');
        }
      })
      .catch(err => {
        console.warn('error = ' + err.message);
      });
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
            source={{uri: item.avatar_url}}
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
          <Text>Name: {item.login}</Text>
          <Text>Phone: {item.node_id}</Text>
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
          refreshing={this.state.showRefreshing}
          onRefresh={() => this.controlRefreshing()}
        />
      </View>
    );
  }
}
