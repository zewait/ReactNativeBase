import React from 'react';
import { View, Text } from 'react-native';

import formatDate from '../formatDate';
import UserInfo from './UserInfo';

export default function Comment(props) {
  return (
    <View>
      <UserInfo author={props.author} />
      <Text>{props.text}</Text>
      <Text>{formatDate(props.date)}</Text>
    </View>
  );
}
