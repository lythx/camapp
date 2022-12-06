import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {/* <RadioButton top={20} left={20} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: 1000,
    height: 1000,
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'red'
  }
})