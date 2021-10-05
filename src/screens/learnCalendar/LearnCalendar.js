/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {NavHeader, AppBtn} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
export class LearnCalendar extends React.Component {
  state = {
    showTimePicker: false,
    showDatePicker: false,
    date: '',
    time: '',
  };

  pickTime = time => {
    let value = moment(time.nativeEvent.timestamp).format('hh:mm a');
    this.setState({time: value, showTimePicker: false});
  };

  pickDate = date => {
    let value = moment(date.nativeEvent.timestamp).format('DD-MMM-Y');
    this.setState({date: value, showDatePicker: false});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader title={'Learn Calendar'} />
        <View
          style={{
            flex: 1,
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppBtn
            txt={'Time = ' + this.state.time}
            onPress={() => this.setState({showTimePicker: true})}
          />

          <AppBtn
            txt={'Date = ' + this.state.date}
            st={{
              marginTop: h('5'),
            }}
            onPress={() => this.setState({showDatePicker: true})}
          />
        </View>

        {this.state.showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode={'time'}
            // is24Hour={true}
            onChange={time => this.pickTime(time)}
          />
        )}

        {this.state.showDatePicker ? (
          <DateTimePicker
            value={new Date()}
            mode={'date'}
            onChange={date => this.pickDate(date)}
          />
        ) : null}
      </View>
    );
  }
}
