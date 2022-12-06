import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, ScrollView } from 'react-native';
import { Camera } from "expo-camera";
import CircleButton from './CircleButton';
import * as MediaLibrary from "expo-media-library";
import RadioGroup from './RadioGroup';

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsDisplayed: false,
      hasCameraPermission: null,         // przydzielone uprawnienia do używania kamery
      type: Camera.Constants.Type.back,  // typ kamery
      settingsPos: new Animated.Value(900),
      settingHidden: true
    };
  }

  async componentDidMount() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async takePhoto() {
    if (this.camera) {
      const picture = await this.camera.takePictureAsync();
      await MediaLibrary.createAssetAsync(picture.uri); // domyślnie zapisuje w folderze DCIM
      this.props.route.params.refresh()
    }
  }

  toggle() {
    const target = this.isHidden ? 0 : 900
    Animated.spring(
      this.state.settingsPos,
      {
        toValue: target,
        velocity: 1,
        tension: 10,
        friction: 10,
        useNativeDriver: true
      }
    ).start();
    this.isHidden = !this.isHidden;
  }


  render() {
    const { hasCameraPermission } = this.state; // podstawienie zmiennej ze state
    if (hasCameraPermission == null) {
      return <View />
    } else if (hasCameraPermission == false) {
      return <Text>brak dostępu do kamery</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref; // Uwaga: referencja do kamery używana później
            }}
            style={{ flex: 1 }}
            type={this.state.type}>
            <View style={{ flex: 1 }}>
              <Animated.ScrollView
                style={[
                  styles.animatedView,
                  {
                    transform: [
                      { translateY: this.state.settingsPos }
                    ]
                  }]} >
                <RadioGroup />
                {/* <Text>ANIMATE ME!</Text> */}
              </Animated.ScrollView>
            </View>
            <View style={{ flex: 1, position: 'relative' }}>
              <CircleButton size={100} left={20} bottom={20}
                onPress={() => this.takePhoto()} image={require('../assets/goback.png')} />
              <CircleButton size={120} alignSelf={'center'} bottom={20}
                onPress={() => this.takePhoto()} image={require('../assets/plus.png')} />
              <CircleButton size={100} right={20} bottom={20}
                onPress={() => {
                  this.setState({ settingsDisplayed: !this.state.settingsDisplayed })
                  this.toggle()
                }}
                image={require('../assets/settings.png')} />
            </View>
          </Camera>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  animatedView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: '50%',
    backgroundColor: '#000000',
    opacity: 0.5,
    height: 1000,
  }
});

export default CameraScreen;