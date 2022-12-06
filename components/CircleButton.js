import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

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
  },
})

class CircleButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={{
        ...styles.opacity,
        width: this.props.size,
        height: this.props.size,
        top: this.props.top,
        bottom: this.props.bottom,
        left: this.props.left,
        right: this.props.right,
        alignSelf: this.props.alignSelf
      }}>
        <Image source={this.props.image} style={{
          width: this.props.size / 1.5,
          height: this.props.size / 1.5,
          zIndex: 100,
          opacity: 1
        }} />
      </ TouchableOpacity>
    );
  }
}

export default CircleButton;
