import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Dimensions } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { ToastAndroid } from "react-native";
import FotoItem from './FotoItem';
import MyButton from './MyButton';

const gridColumns = 5

export default class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      readPermissions: false,
      photos: [],
      isGridLayout: true
    };
    this.getPhotos()
  }

  async componentDidMount() {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      ToastAndroid.showWithGravity(
        'Brak uprawnień do czytania image-ów z galerii',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      this.setState({ readPermissions: true })
      this.getPhotos()
    }
  }

  async getPhotos() {
    if (!this.state.readPermissions) { return }
    const album = await MediaLibrary.getAlbumAsync("DCIM")
    const { assets } = await MediaLibrary.getAssetsAsync({
      album,
      first: 100,
      mediaType: ['photo']
    })
    this.setState({ photos: assets.map(a => ({ ...a, isSelected: false })) })
  }

  onCameraPress() {
    this.props.navigation.
      navigate("camera", { refresh: () => this.getPhotos() })
  }

  onPhotoLongPress(id) {
    const photo = this.state.photos.find(a => a.id === id)
    photo.isSelected = !photo.isSelected
    this.forceUpdate()
  }

  onPhotoPress(id) {
    this.props.navigation.
      navigate("camera", { refresh: () => this.getPhotos() })
  }

  render() {
    const columnCount = this.state.isGridLayout ? gridColumns : 1
    const dimensions = Dimensions.get("window")
    const w = dimensions.width / columnCount
    const h = dimensions.height / (this.state.isGridLayout ? 10 : 5)
    return (
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <MyButton text='LAYOUT' width={100} height={30} margin={10}
            color='#eeeeee' background='#ff0055'
            onPress={() => this.setState({ isGridLayout: !this.state.isGridLayout })} />
          <MyButton text='CAMERA' width={100} height={30} margin={10}
            color='#eeeeee' background='#ff0055'
            onPress={() => this.onCameraPress()} />
          <MyButton text='DELETE' width={100} height={30} margin={10}
            color='#eeeeee' background='#ff0055'
            onPress={() => this.onDetails()} />
        </View>
        <View style={styles.list}>
          <FlatList
            numColumns={columnCount}
            key={columnCount}
            data={this.state.photos}
            renderItem={({ item }) => <FotoItem id={item.id}
              width={w} height={h} uri={item.uri} isSelected={item.isSelected}
              onPress={() => this.onPhotoPress(item.id)}
              onLongPress={() => this.onPhotoLongPress(item.id)} />} />
        </View>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#444444',
    flex: 1
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  list: {
    flex: 10
  }
})