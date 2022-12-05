import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  opacity: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 1000000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity: 0.5,
    position: 'absolute'
  }
})

class CircleButton extends Component {

  render() {
    console.log(this.props)
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={{
        ...styles.opacity,
        width: this.props.size,
        height: this.props.size,
        top: this.props.top,
        bottom: this.props.bottom,
        left: this.props.left,
        right: this.props.right
      }}>
      </ TouchableOpacity>
    );
  }
}

export default CircleButton;
