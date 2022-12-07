import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from 'expo-sharing';
import MyButton from './MyButton';

class BigPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async onShare() {
    const isAvailableAsync = await Sharing.isAvailableAsync()
    if (isAvailableAsync) { Sharing.shareAsync(this.props.route.params.uri) }
  }

  async onDelete() {
    await MediaLibrary.deleteAssetsAsync([this.props.route.params.id]);
    await this.props.route.params.refresh()
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={{ uri: this.props.route.params.uri }}
        />
        <Text style={styles.text}>{this.props.route.params.width} X {this.props.route.params.height}</Text>
        <View style={styles.buttonWrapper}>
          <MyButton text='SHARE' width={100} height={30} margin={10}
            color='#eeeeee' background='#ff0055'
            onPress={() => this.onShare()} />
          <MyButton text='DELETE' width={100} height={30} margin={10}
            color='#eeeeee' background='#ff0055'
            onPress={() => this.onDelete()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#444444',
  },
  image: {
    flex: 4,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    margin: 20
  },
  text: {
    color: 'white',
    fontSize: 40,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1
  }
})

export default BigPhoto;
