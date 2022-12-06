import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  opacity: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    borderRadius: 1000000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderColor: '#ff0055',
    borderWidth: 1,
    opacity: 0.5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    borderRadius: 1000000,
    width: 20 * 0.8,
    height: 20 * 0.8,
    backgroundColor: '#ff0055',
  }
})

export default class RadioButton extends Component {

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
        {!this.props.isPressed ? <></> :
          <View style={styles.selected} />}
      </ TouchableOpacity>
    );
  }
}
