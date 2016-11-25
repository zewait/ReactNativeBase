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

// 导入自己创建的模块要与node_modules分隔一行
import formatDate from './src/formatDate';

function Welcome(props) {
  return <Text>Hello, {props.name}!</Text>;
}

export default class ReactNativeBase extends Component {
  render() {
    return (
      <Welcome name="World" />
    );
  }
}

AppRegistry.registerComponent('ReactNativeBase', () => ReactNativeBase);
