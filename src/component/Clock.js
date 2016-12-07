import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <Text>{this.state.date.toLocaleTimeString()}</Text>;
  }
}
