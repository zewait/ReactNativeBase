import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

/**
 * 华氏度转摄氏度
 *
 * @param fahrenheit 华氏度
 */
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(value);
  const rounded = Math.round(output*1000) / 1000;
  return rounded.toString();
}

/**
 * 输入温度
 *
 */
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', scale: 'c' }
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
  }

  handleCelsiusChange(value) {
    this.setState({scale: 'c', value: value});
  }

  handleFahrenheitChange(value) {
    this.setState({scale: 'f', value: value});
  }

  render() {
    const value = this.state.value;
    const celsius = this.state.scale==='f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = this.state.scale === 'c' ? tryConvert(value, toFahrenheit) : value;
    return (
      <View>
        <TemperatureInput 
          scale="c" 
          handleChange={this.handleCelsiusChange} 
          value={celsius} />
        <TemperatureInput 
          scale="f" 
          handleChange={this.handleFahrenheitChange} 
          value={fahrenheit} />
        <BoilingVerdict celsius={celsius}/>
      </View>
    );
  }
}
