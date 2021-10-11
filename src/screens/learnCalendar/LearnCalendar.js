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
import {Calendar} from 'react-native-calendars';
import {primaryColor, secondaryColor} from '../Dimen';
export class LearnCalendar extends React.Component {
  state = {
    showTimePicker: false,
    showDatePicker: false,
    date: '',
    time: '',

    dt: '',
    allDates: ['2021-10-10', '2021-10-11', '2021-10-12'],
    markedDates: {},

    data: [
      {
        name: 'Ali',
      },
    ],
  };

  componentDidMount = () => {
    this.mark(this.state.allDates);
  };

  pickTime = time => {
    let value = moment(time.nativeEvent.timestamp).format('hh:mm a');
    this.setState({time: value, showTimePicker: false});
  };

  pickDate = date => {
    let value = moment(date.nativeEvent.timestamp).format('DD-MMM-Y');
    this.setState({date: value, showDatePicker: false});
  };

  mark = dates => {
    let markedDate = [];

    dates.forEach(item => {
      markedDate = {...markedDate, [item]: {marked: true}};
    });

    markedDate = {
      ...markedDate,
      [this.state.dt]: {selected: true, marked: true},
    };

    this.setState({markedDates: markedDate}, () => {});
  };

  study = () => {
    let newItem = {
      name: 'Umer',
    };

    this.setState(
      prevState => ({data: [...prevState.data, newItem]}),
      () => {
        console.warn(this.state.data);
      },
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Learn Calendar'}
          leftIc={'arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <View
          style={{
            height: h('60'),
            // backgroundColor: '#aaf',
          }}>
          <Calendar
            onDayPress={day => {
              // console.warn(moment(day.dateString).format('DD-MMM-Y'));
              const value = moment(day.dateString).format('DD-MMM-Y');
              this.setState(
                {
                  date: value,
                  dt: day.dateString,
                },
                () => {
                  this.mark(this.state.allDates);
                },
              );
            }}
            markedDates={this.state.markedDates}
            // markedDates={{
            //   [this.state.dt]: {selected: true},
            // }}
            // current={this.state.dt}
            // minDate={moment(new Date() - 1).format('YYYY-MM-DD')}
            // maxDate={'2021-10-13'}
            // firstDay={1}
            theme={{
              backgroundColor: '#fff',
              calendarBackground: '#fff',
              textSectionTitleColor: secondaryColor,
              selectedDayBackgroundColor: secondaryColor,
              selectedDayTextColor: '#fff',
              todayTextColor: '#fff',
              todayBackgroundColor: 'blue',

              dayTextColor: 'black',
              textDisabledColor: '#d9e1e8',
              dotColor: 'blue',
              selectedDotColor: '#fff',
              arrowColor: 'blue',
              monthTextColor: secondaryColor,
              textDayFontSize: h('2'),
              textMonthFontSize: h('2'),
              textDayHeaderFontSize: h('2'),
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppBtn
            txt={'Time = ' + this.state.time}
            // onPress={() => this.setState({showTimePicker: true})}
            onPress={() => this.study()}
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
