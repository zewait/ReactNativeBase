/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// es6 module package
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
} from 'react-native';

import { Clock } from './src/component';
export default class ReactNativeBase extends Component {
  render() {
    return <Clock />;
  }
}


AppRegistry.registerComponent('ReactNativeBase', () => ReactNativeBase);
