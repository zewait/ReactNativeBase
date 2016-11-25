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

// 导入自己创建的模块要与node_modules分隔一行
import formatDate from './src/formatDate';

// 组件名必须大写
function Comment(props) {
  return (
    <View>
      <Image  
        source={{uri: props.author.avatarUrl}}
        style={style.avatar}
      />
      <Text>{props.author.name}</Text>
      <Text>{props.text}</Text>
      <Text>{formatDate(props.date)}</Text>
    </View>
  );
}

export default class ReactNativeBase extends Component {
  render() {
    return (
      <Comment {...COMMENT_DATA} />
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

let style = {
  avatar: {
    height: 64,
    width: 64,
  }
}

AppRegistry.registerComponent('ReactNativeBase', () => ReactNativeBase);
