/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {AppBtn} from '../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export class Profile extends React.Component {
  state = {
    img: '',
  };

  profileImg = value => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const result = value === 'camera' ? launchCamera : launchImageLibrary;

    result(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.warn('User tapped custom button: ', response.customButton);
      } else {
        // actual URL of image
        const source = response.assets[0].uri;

        this.setState({
          img: source,
        });
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            height: '30%',
            width: '97.5%',
            // backgroundColor: '#faf',
            margin: 5,
            marginTop: 20,
            borderWidth: 1,
            borderColor: 'orange',
          }}>
          <Image
            style={{
              height: '100%',
              width: '100%',
            }}
            source={{uri: this.state.img}}
          />
        </View>

        <AppBtn
          onPress={() => {
            this.profileImg('camera');
          }}
          txt={'Open camera'}
          st={{
            marginTop: 10,
          }}
        />
        <AppBtn
          onPress={() => {
            this.profileImg('gallery');
          }}
          txt={'Open Gallery'}
          st={{
            marginTop: 10,
          }}
        />
      </View>
    );
  }
}
