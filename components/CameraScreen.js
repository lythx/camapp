import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Camera } from "expo-camera";
import CircleButton from './CircleButton';
import * as MediaLibrary from "expo-media-library";

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      hasCameraPermission: null,         // przydzielone uprawnienia do używania kamery
      type: Camera.Constants.Type.back,  // typ kamery
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
            <View style={{ flex: 1, position: 'relative' }}>
              <CircleButton size={100} left={20} bottom={20}
                onPress={() => this.takePhoto()} image={require('../assets/goback.png')} />
              <CircleButton size={120} alignSelf={'center'} bottom={20}
                onPress={() => this.takePhoto()} image={require('../assets/plus.png')} />
              <CircleButton size={100} right={20} bottom={20}
                onPress={() => this.takePhoto()} image={require('../assets/settings.png')} />
            </View>
          </Camera>
        </View>
      );
    }
  }

}

export default CameraScreen;
