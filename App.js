import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UploadPage from './components/UploadPage';
import GalleryPage from './components/GalleryPage';
import PhotoDetailsPage from './components/PhotoDetailsPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryPage} />
        <Stack.Screen name="Upload" component={UploadPage} />
        <Stack.Screen name="PhotoDetails" component={PhotoDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
