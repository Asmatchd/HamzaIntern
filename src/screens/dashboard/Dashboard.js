/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Modal,
} from 'react-native';
import {NavHeader, Loading, AppInput, AppBtn} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class Dashboard extends React.Component {
  state = {
    showLoading: false,
    modalVisible: false,

    name: '',
    phone: '',
    email: '',
    password: '',
  };

  componentDidMount = () => {
    // this.controlLoading(true);

    AsyncStorage.getItem('userData', (error, data) => {
      if (error || data === null) {
        alert('Something went wrong');
      } else {
        const user = JSON.parse(data);
        this.setState({
          email: user.email,
          password: user.password,
          phone: '1234567890',
          name: 'Hamza',
        });
      }
    });

    // setTimeout(() => {
    //   this.controlLoading(false);
    // }, 2000);
  };

  logOut = () => {
    AsyncStorage.removeItem('userData', () => {
      this.props.navigation.replace('SignIn');
    });
  };

  controlLoading = value => {
    this.setState({showLoading: value});
  };

  render() {
    return (
      <ImageBackground
        style={{
          height: '100%',
        }}
        source={require('../../assets/bg.jpg')}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#0006',
          }}>
          <Loading show={this.state.showLoading} />
          <NavHeader
            title={'Dashboard'}
            leftIc={'list'}
            leftPressed={() => {
              this.props.navigation.openDrawer();
            }}
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
              onPress={() => {
                this.props.navigation.navigate('TabNavigator');
              }}
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

          <View
            style={{
              height: '18%',
              // backgroundColor: '#faf',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}
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
              <Text>Image Picker</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '18%',
              // backgroundColor: '#faf',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LearnCalendar');
                // Alert.alert('Custom Alert...!', 'THis is custom alert', [
                //   {
                //     text: 'Remind later',
                //     onPress: () => console.warn('remind Later'),
                //   },
                //   {
                //     text: 'Cancel',
                //     onPress: () => console.warn('Cancel'),
                //   },
                //   {
                //     text: 'Ok',
                //     onPress: () => console.warn('Ok'),
                //   },
                // ]);
              }}
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
              <Text>Learn Calendar</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '18%',
              // backgroundColor: '#faf',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}
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
              <Text>Modal</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '18%',
              // backgroundColor: '#faf',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}
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
              <Text>Date & Time</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#0009',
                alignItems: 'center',
              }}>
              <NavHeader
                title={'Modal'}
                leftIc={'arrow-back'}
                leftPressed={() => {
                  this.setState({modalVisible: false});
                }}
              />

              <View style={{width: '90%', marginTop: 20}}>
                <AppInput
                  value={this.state.name}
                  ic={'ios-person'}
                  st={{
                    marginTop: 10,
                  }}
                  onChangeText={txt => this.setState({name: txt})}
                />
                <AppInput
                  value={this.state.phone}
                  ic={'ios-call'}
                  st={{
                    marginTop: 10,
                  }}
                  onChangeText={txt => this.setState({phone: txt})}
                />
                <AppInput
                  value={this.state.email}
                  ic={'ios-mail'}
                  st={{
                    marginTop: 10,
                  }}
                  onChangeText={txt => this.setState({email: txt})}
                />
                <AppInput
                  value={this.state.password}
                  ic={'lock-closed'}
                  st={{
                    marginTop: 10,
                  }}
                  onChangeText={txt => this.setState({password: txt})}
                />

                <AppBtn
                  txt={'Done'}
                  st={{
                    marginTop: 20,
                  }}
                  onPress={() => this.setState({modalVisible: false})}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </Modal>
      </ImageBackground>
    );
  }
}
