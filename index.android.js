/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// es6 module package
import React from 'react';
const Component = React.Component;
import {
  AppRegistry,
  Text,
} from 'react-native';

import {
  Calculator,
  TemperatureInput
} from './src/component';

export default class ReactNativeBase extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

AppRegistry.registerComponent('ReactNativeBase', () => ReactNativeBase);
