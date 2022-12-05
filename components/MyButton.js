import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  opacity: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    fontSize: 18
  }
})

class MyButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={{
        ...styles.opacity,
        backgroundColor: this.props.background,
        width: this.props.width,
        height: this.props.height,
        margin: this.props.margin
      }}>
        <Text style={{
          ...styles.text,
          color: this.props.color
        }}>{this.props.text}</Text>
      </ TouchableOpacity>
    );
  }
}

export default MyButton;
