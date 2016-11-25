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
  View,
  Image,
} from 'react-native';

// 这里其实是 import { Comment, Avatar, UserInfo } from './src/component/index.js';
import { Comment, Avatar, UserInfo } from './src/component';

export default class ReactNativeBase extends Component {
  render() {
    return (
      <Comment { ...COMMENT_DATA } />
    );
  }
}


// 定义常量都是大写跟下划线
const COMMENT_DATA = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
} 


AppRegistry.registerComponent('ReactNativeBase', () => ReactNativeBase);
