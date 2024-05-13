import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const UploadPage = () => {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.uri);
    }
  };

  const uploadPhoto = async () => {
    if (!photo || !title || !description) {
      Alert.alert('Error', 'Please select a photo and fill in title and description.');
      return;
    }

    try {
      //Server url
      const response = await axios.post('server-url', {
        photo,
        title,
        description,
      });
      Alert.alert('Success', 'Photo uploaded successfully.');
    } catch (error) {
      Alert.alert('Error', 'Failed to upload photo. Please try again later.');
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick a photo" onPress={pickImage} />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200, marginTop: 20 }} />}
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20, width: 300 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 10, width: 300 }}
        multiline
      />
      <Button title="Upload" onPress={uploadPhoto} style={{ marginTop: 20 }} />
    </View>
  );
};

export default UploadPage;
