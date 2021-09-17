/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavHeader} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

export class Details extends React.Component {
  state = {
    user: {},
  };
  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({user: navProps.hamza});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'User Details'}
          leftIc={'arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <View
          style={{
            // backgroundColor: '#aaf',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
            }}>
            Name: {this.state.user.name}
          </Text>
          <Text
            style={{
              fontSize: 22,
            }}>
            Phone: {this.state.user.phone}
          </Text>
          <Text
            style={{
              fontSize: 22,
            }}>
            Age: {this.state.user.age}
          </Text>
          <Text
            style={{
              fontSize: 22,
            }}>
            DOB: {this.state.user.dob}
          </Text>
        </View>
      </View>
    );
  }
}
