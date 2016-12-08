import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() , times: 0};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date });
    // 另一种setState使用
    // 应用场景,需要用到上一次状态
    // 因为异步环境,直接引用this.state.times保证不了准确性
    this.setState((prevState, props) => ({
      times: prevState.times + 1
    }));
  }

  render() {
    return (<View>
      <Text>{this.state.date.toLocaleTimeString()}</Text>
      <Text>{this.state.times}</Text>
    </View>);
  }
}
