import React from 'react';
import { Image } from 'react-native';

export default function Avatar(props) {
  return (<Image  
    source={{uri: props.author.avatarUrl}}
    style={style.avatar}
  />);
}

let style = {
  avatar: {
    height: 64,
    width: 64,
  }
}
