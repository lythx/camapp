import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  opacity: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    borderRadius: 1000000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderColor: '#ff0055',
    borderWidth: 1,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    borderRadius: 1000000,
    width: 35 * 0.6,
    height: 35 * 0.6,
    backgroundColor: '#ff0055',
  }
})

export default class RadioButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={{
        ...styles.opacity
      }}>
        {!this.props.selected ? <></> :
          <View style={styles.selected} />}
      </ TouchableOpacity>
    );
  }
}
