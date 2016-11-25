import React from 'react';
import { View, Text } from 'react-native';

import Avatar from './Avatar';

export default function UserInfo(props) {
  return (
      <View>
        <Avatar author={props.author} />
        <Text>{props.author.name}</Text>
      </View>
  );
}
