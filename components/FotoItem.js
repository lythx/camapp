import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Image, TouchableOpacity } from 'react-native';
import MyButton from './MyButton';

const padding = 5

class FotoItem extends Component {

  render() {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={() => this.props.onPress()}
        onLongPress={() => this.props.onLongPress()}>
        {this.props.isSelected ?
          <View style={styles.selectCover}></View> :
          <></>}
        <Image style={{
          ...styles.image,
          width: this.props.width - padding * 2,
          height: this.props.height - padding * 2,
        }}
          source={{ uri: this.props.uri }} />
        <Text style={styles.text}>{this.props.id}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding,
    position: 'relative',
    display: 'flex'
  },
  image: {
    borderRadius: 15,
  },
  selectCover: {
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignSelf: 'flex-end',
    padding: 10,
    bottom: -1
  }
})

export default FotoItem;
