/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import moment from 'moment';

export class Settings extends React.Component {
  state = {
    customModal: false,
  };
  logOut = () => {
    AsyncStorage.removeItem('userData', () => {
      this.props.navigation.replace('SignIn');
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0009',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('List');
          }}
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState({customModal: true});
          }}
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text>LogOut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState({customModal: true});
          }}
          style={{
            width: '100%',
            height: '10%',
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: h('3'),
            }}>
            {moment().format('hh:mm a,  DD-MMM-YY')}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.customModal}
          onRequestClose={() => {
            this.setState({customModal: false});
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                height: h('25'),
                borderRadius: h('2'),
              }}>
              <View
                style={{
                  width: '100%',
                  // backgroundColor: '#faf',
                  height: h('6'),
                  justifyContent: 'center',
                  borderBottomWidth: h('0.05'),
                  borderColor: 'grey',
                  paddingLeft: h('2'),
                }}>
                <Text
                  style={{
                    fontSize: h('3'),
                    fontWeight: 'bold',
                  }}>
                  Alert....!
                </Text>
              </View>

              <View
                style={{
                  height: h('12'),
                  // backgroundColor: '#aaf',
                  paddingTop: h('2'),
                  paddingLeft: h('2'),
                }}>
                <Text
                  style={{
                    fontSize: h('2.3'),
                  }}>
                  Do you really want to logOut?
                </Text>
              </View>

              <View
                style={{
                  height: h('7'),
                  // backgroundColor: '#fa3',
                  flexDirection: 'row',
                  borderTopWidth: h('0.05'),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({customModal: false});
                  }}
                  style={{
                    width: '50%',
                    height: '100%',
                    // backgroundColor: '#a7a',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: h('0.05'),
                  }}>
                  <Text
                    style={{
                      fontSize: h('2.3'),
                    }}>
                    NO
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.setState({customModal: false}, () => {
                      this.logOut();
                    });
                  }}
                  style={{
                    width: '50%',
                    height: '100%',
                    // backgroundColor: '#a7a',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: h('2.3'),
                    }}>
                    YES
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
