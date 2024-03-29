import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./components/Main"
import Gallery from './components/Gallery'
import CameraScreen from './components/CameraScreen'
import BigPhoto from './components/BigPhoto'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{
          headerShown: false
        }} />
        <Stack.Screen name="gallery" component={Gallery} options={{
          title: 'Zdjęcia z folderu DCIM',
          ...styles
        }} />
        <Stack.Screen name="camera" component={CameraScreen} options={{
          title: 'Kamera',
          ...styles,
          headerShown: false
        }} />
        <Stack.Screen name="photo" component={BigPhoto} options={{
          title: 'Wybrane zdjęcie',
          ...styles
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = {
  headerStyle: {
    backgroundColor: '#ff0055',
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#eeeeee'
  }
}