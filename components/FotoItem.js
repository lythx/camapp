import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const padding = 5

class FotoItem extends Component {

  render() {
    const width = this.props.width - padding * 2
    const height = this.props.height - padding * 2
    // TODO SELECT IMAGE
    return (
      <TouchableOpacity style={styles.wrapper} onPress={() => this.props.onPress()}
        onLongPress={() => this.props.onLongPress()}>
        <ImageBackground style={{
          width,
          height,
        }}
          imageStyle={{ borderRadius: 10 }}
          source={{ uri: this.props.uri }}>
          {this.props.isSelected ?
            <>
              <View style={{
                ...styles.selectCover,
                width,
                height
              }} >
                <Image style={{
                  ...styles.coverImg,
                  width: width / 2,
                  height: height / 2
                }} source={require('../assets/plus.png')} />
              </View>

            </> :
            <></>}
          <Text style={styles.text}>{this.props.id}</Text>
        </ImageBackground>
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
  selectCover: {
    borderRadius: 10,
    flex: 1,
    opacity: 0.5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  coverImg: {
    zIndex: 100
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
