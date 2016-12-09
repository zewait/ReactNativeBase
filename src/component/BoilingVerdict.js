import React, { Component } from 'react';
import {
  Text
} from 'react-native';


/**
 * 判断水的沸点
 *
 */
export default class BoilingVerdict extends Component {
  render() {
    const celsius = this.props.celsius;
    if (celsius >= 100)
      return <Text>水已经沸腾了</Text>;
    return <Text>水还没沸腾</Text>;
  }
}
