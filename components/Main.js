import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Font from "expo-font";
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 60,
    textAlign: 'center'
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  }
})

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'myfont': require('../font.ttf'), // Uwaga: proszę w nazwie fonta nie używać dużych liter
    });
    this.setState({ fontLoaded: true })
  }

  onHeaderPress = () => {
    this.props.navigation.navigate('gallery')
  }

  render() {
    return (
      this.state.fontLoaded ?
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.onHeaderPress()}>
            <Text style={{
              ...styles.headerText,
              fontFamily: 'myfont'
            }}> Camera App </Text>
          </TouchableOpacity>
          <Text style={styles.text}>show gallery pictures
            take picture from camera
            save photo to device
            delete photos from device
            share photo</Text>
        </View> : <ActivityIndicator size="large" color="#0000ff" />
    );
  }
}
