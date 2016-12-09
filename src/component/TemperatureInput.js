import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

const scaleNames = {
  c: '摄氏度',
  f: '华氏度',
}

export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(text) {
    this.props.handleChange(text);
  }
  render() {
    const scale = this.props.scale;
    const value = this.props.value;
    console.log(`render ${scaleNames[scale]}`);
    console.log(value);
    return (
      <View>
        <Text>请输入{scaleNames[scale]}</Text>
        <TextInput onChangeText={this.handleChange} value={value}/>
      </View>
    );
  }
}
